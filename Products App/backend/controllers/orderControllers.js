const User = require("../models/User");
const Product = require("../models/Product");

const createOrder = async (req, res) => {
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
            } else {
                throw new Error("Insufficient quantity for a product in the order.");
            }
        }
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
    res.json(order);
};

const editOrder = async (req, res) => {};

const deleteOrder = async (req, res) => {};

const getUserOrders = async (req, res) => {};

const getAllOrders = async (req, res) => {};

const getOrderById = async (req, res) => {};

module.exports = { createOrder, editOrder, deleteOrder, getUserOrders, getAllOrders, getOrderById };
