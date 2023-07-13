const express = require("express");
const productRoutes = express.Router();

const {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
} = require("../controllers/productsController");

//authMiddleware
const { protectRoute, admin } = require("../middleware/authMiddleware");

//routes
productRoutes.route("/products").get(getAllProducts);
productRoutes.route("/products/:productId").get(getProduct);
//protectedRoutes,admin only
productRoutes.route("/products").post(protectRoute, admin, createProduct);
productRoutes.route("/products/:productId").delete(protectRoute, admin, deleteProduct);
productRoutes.route("/products/:productId").put(protectRoute, admin, updateProduct);

module.exports = productRoutes;
