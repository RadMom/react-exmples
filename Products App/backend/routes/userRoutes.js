const express = require("express");
const userRoutes = express.Router();

//authMiddleware
const { protectRoute, admin } = require("../middleware/authMiddleware");

//user controllers
const {
    loginUser,
    registerUser,
    updateUserProfile,

    getAllUsers,
    deleteUser,
} = require("../controllers/userController");

//routes
userRoutes.post("/login", loginUser);
userRoutes.post("/registration", registerUser);

//protectedRoutes
userRoutes.put("/profile/:id", protectRoute, updateUserProfile);

//admin only routes
userRoutes.get("/", protectRoute, admin, getAllUsers);
userRoutes.delete("/:id", protectRoute, admin, deleteUser);

module.exports = userRoutes;
