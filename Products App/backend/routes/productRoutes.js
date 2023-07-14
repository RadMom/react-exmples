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
productRoutes.route("/").get(getAllProducts);
productRoutes.route("/:id").get(getProduct);
//protectedRoutes,admin only
productRoutes.route("/").post(protectRoute, admin, createProduct);
productRoutes.route("/:id").delete(protectRoute, admin, deleteProduct);
productRoutes.route("/:id").put(protectRoute, admin, updateProduct);

module.exports = productRoutes;
