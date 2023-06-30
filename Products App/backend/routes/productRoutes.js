const express = require("express");
const productRoutes = express.Router();

//GET ALL PRODUCTS,method:GET
//URL: /products
const getAllProducts = async (req, res) => {};

//GET PRODUCT,method:GET
//URL: /products/:productId
const getProduct = async (req, res) => {};

//CREATE PRODUCT ,method:POST
//URL: /products
const createProduct = async (req, res) => {};

//DELETE PRODUCT ,method:DELETE
//URL: /products/:productId
const deleteProduct = async (req, res) => {};

//UPDATE PRODUCT ,method:PUT
//URL: /products/:productId
const updateProduct = async (req, res) => {};

//routes
productRoutes.route("/products").get(getAllProducts);
productRoutes.route("/products/:productId").get(getProduct);
//protectedRoutes,admin only
productRoutes.route("/products").post(createProduct);
productRoutes.route("/products/:productId").delete(deleteProduct);
productRoutes.route("/products/:productId").put(updateProduct);

module.exports = productRoutes;
