const express = require("express");
const userRoutes = express.Router();

//authMiddleware
const { protectRoute, admin } = require("../middleware/authMiddleware");

//user controllers
const {
    loginUser,
    registerUser,
    updateUserProfile,
    getUserOrders,
    getAllUsers,
    deleteUser,
} = require("../controllers/userController");

//routes
userRoutes.post("/login", loginUser);
userRoutes.post("/register", registerUser);
//protectedRoutes
userRoutes.get("/:id", protectRoute, getUserOrders);
userRoutes.put("/profile/:id", protectRoute, updateUserProfile);
//admin only routes
userRoutes.get("/", protectRoute, admin, getAllUsers);
userRoutes.delete("/:id", protectRoute, admin, deleteUser);

module.exports = userRoutes;
