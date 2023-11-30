const Product = require("../models/Product");

//GET ALL PRODUCTS,method:GET
//URL: /products
const getAllProducts = async (req, res) => {
    try {
        const { page, limit, category, sortBy, search } = req.query;
        console.log(req.query);
        let query = {};

        if (category && category.toLowerCase() !== "all") {
            query.category = category;
        }

        // Include the search term in your query
        if (search) {
            query.name = { $regex: new RegExp(search, "i") };
        }

        let sortOptions = {};
        if (sortBy) {
            if (sortBy === "1") {
                sortOptions.price = -1;
            } else {
                sortOptions.price = 1;
            }
        }
        console.log(query);
        const products = await Product.find(query)
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(limit);

        console.log(products.length);
        // Count total products for pagination
        const totalProducts = await Product.countDocuments(query);

        if (products) {
            res.json({
                products,
                totalPages: Math.ceil(totalProducts / limit),
                currentPage: parseInt(page),
            });
        } else {
            res.status(404);
            throw new Error("Products not found.");
        }
    } catch (error) {
        res.json(error.message);
    }
};

//GET PRODUCT,method:GET
//URL: /products/:productId
const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404);
            throw new Error("Product not found.");
        }
    } catch (err) {
        console.error("Get productById error: ", err);
        next(err);
    }
};

//CREATE PRODUCT ,method:POST
//URL: /products
const createProduct = async (req, res) => {
    const { name, image, category, description, price, stock, productIsNew } = req.body;

    try {
        if (name && image && category && description && price && stock) {
            const newProduct = await Product.create({
                user: req.user._id,
                name,
                image,
                category,
                description,
                price,
                stock,
                productIsNew,
            });
            await newProduct.save();
            if (newProduct) {
                const products = await Product.find({});
                res.json(products);
            }
        } else {
            res.status(404);
            throw new Error("Product could not be uploaded.");
        }
    } catch (error) {
        res.json(error.message);
    }
};

//DELETE PRODUCT ,method:DELETE
//URL: /products/:productId
const deleteProduct = async (req, res) => {
    console.log(req.params.id);
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            res.status(404);
            throw new Error("Product not found");
        } else {
            res.status(200).json({ message: "Product deleted successfully" });
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
};

//UPDATE PRODUCT ,method:PUT
//URL: /products/:productId
const updateProduct = async (req, res) => {
    const { name, image, category, description, price, stock, productIsNew } = req.body;

    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            if (name && image && category && description && price && stock) {
                product.name = name;
                product.image = image;
                product.category = category;
                product.description = description;
                product.price = price;
                product.stock = stock;
                product.productIsNew = productIsNew;

                const updatedProduct = await product.save();
                res.json(updatedProduct);
            } else {
                res.status(404);
                throw new Error("Fill all fields!!!");
            }
        } else {
            res.status(404);
            throw new Error("Product not found.");
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
};
