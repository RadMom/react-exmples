const Product = require("../models/Product");

//GET ALL PRODUCTS,method:GET
//URL: /products
const getAllProducts = async (req, res) => {
    const products = await Product.find({});

    if (products) {
        res.json(products);
    } else {
        res.status(404);
        throw new Error("Product not found.");
    }
};

//GET PRODUCT,method:GET
//URL: /products/:productId
const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product not found.");
    }
};

//CREATE PRODUCT ,method:POST
//URL: /products
const createProduct = async (req, res) => {
    const { name, image, category, description, price, stock, productIsNew } = req.body;

    const newProduct = await Product.create({
        name,
        image,
        category,
        description,
        price,
        stock,
        productIsNew,
    });
    await newProduct.save();

    const products = await Product.find({});

    if (newProduct) {
        res.json(products);
    } else {
        res.status(404);
        throw new Error("Product could not be uploaded.");
    }
};

//DELETE PRODUCT ,method:DELETE
//URL: /products/:productId
const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
    }
};

//UPDATE PRODUCT ,method:PUT
//URL: /products/:productId
const updateProduct = async (req, res) => {
    const { name, image, category, description, price, stock, productIsNew } = req.body;
    const product = await Product.findById(id);

    if (product) {
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
        throw new Error("Product not found.");
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
};
