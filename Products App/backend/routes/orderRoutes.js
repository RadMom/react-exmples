const express = require("express");
const orderRoutes = express.Router();

//controllers
const {
    createOrder,
    editOrder,
    deleteOrder,
    getUserOrders,
    getAllOrders,
    getOrderById,
} = require("../controllers/orderControllers");

//authMiddleware
const { protectRoute, admin } = require("../middleware/authMiddleware");

orderRoutes.post("/", protectRoute, createOrder);
orderRoutes.get("/:orderId", protectRoute, getOrderById);
orderRoutes.get("/", protectRoute, getUserOrders);

//admin only !

orderRoutes.put("/admin/:orderId", protectRoute, admin, editOrder);
orderRoutes.delete("/admin/:orderId", protectRoute, admin, deleteOrder);
orderRoutes.get("/admin/:id", protectRoute, admin, getOrderById);
orderRoutes.get("/admin/orders", protectRoute, admin, getAllOrders);

module.exports = orderRoutes;
