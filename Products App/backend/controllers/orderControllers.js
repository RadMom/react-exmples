const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

const createOrder = async (req, res, next) => {
    const { products } = req.body;

    //products verification data
    let order = {
        orderTotalPrice: 0,
        products: [],
    };
    let orderTotalPrice = 0;

    if (!products || products.lenght <= 0) {
        throw new Error("No products in the cart");
    }
    console.log(products);
    try {
        for (const orderProduct of products) {
            const product = await Product.findById(orderProduct.id);

            if (product && product.stock >= orderProduct.quantity) {
                const priceForProduct = product.price * orderProduct.quantity;
                if (priceForProduct !== orderProduct.totalPriceForItem) {
                    throw new Error(`Total price for ${orderProduct.name} is not accurate`);
                }
                order.orderTotalPrice += priceForProduct;

                // Update the quantity in the database
                const updatedStock = product.stock - orderProduct.quantity;
                await Product.findByIdAndUpdate(orderProduct.id, { stock: updatedStock });

                //checked products
                order.products.push(orderProduct);
                //const createOrder=await Order.create(order)
            } else {
                throw new Error("Insufficient quantity for a product in the order.");
            }
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
    res.json(order);
};

const editOrder = async (req, res) => {};

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await Order.findById(id);
        if (!order) {
            res.status(404);
            throw new Error("Order not found.");
        }
        const deletedOrder = await Order.findByIdAndDelete(id);
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (err) {
        console.error("Delete order error: ", err);
        res.status(500);
        throw new Error(err.message);
    }
};

//getUserOrders controller
const getUserOrders = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        throw new Error("");
    }

    try {
        const orders = await Order.find({ user: req.params.id });
        if (orders) {
            return res.status(200).json(orders);
        } else {
            res.status(404);
            throw new Error("No Orders found for this User");
        }
    } catch (error) {
        next(error);
    }
};

const getAllOrders = async (req, res) => {
    try {
        const { pagination, sortBy, search } = req.query;
        const page = pagination.page;
        const limit = pagination.limit;
        const searchBy = search.searchBy; //can be orderId or ...
        const searchInput = search.searchInput;

        console.log(req.query);
        let query = {};

        if (search && search.searchBy && search.searchInput) {
            if (searchBy === "id" || searchBy === "name") {
                query[searchBy] = { $regex: new RegExp(searchInput, "i") };
            } else {
                res.status(400);
                throw new Error("invalid search parameter");
            }
        }

        let sortOptions = {};
        if (sortBy) {
            if (sortBy === "1") {
                sortOptions.name = 1;
            } else {
                sortOptions.name = -1;
            }
        }
        console.log(sortOptions);
        const orders = await Order.find(query)
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(limit);

        console.log(orders.length);
        // Count total products for pagination
        const totalOrders = await User.countDocuments(query);

        if (orders) {
            res.json({
                orders,
                totalPages: Math.ceil(totalProducts / limit),
                currentPage: parseInt(page),
            });
        } else {
            res.status(404);
            throw new Error("Order not found.");
        }
    } catch (error) {
        res.json(error.message);
    }
};

const getOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            res.status(404);
            throw new Error("Order not found");
        }
    } catch (err) {
        console.error("Get orderById error: ", err);
        res.status(500);
        throw new Error("Get orderById error");
    }
};

module.exports = { createOrder, editOrder, deleteOrder, getUserOrders, getAllOrders, getOrderById };
