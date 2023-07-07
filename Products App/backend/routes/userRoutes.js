const express = require("express");
const userRoutes = express.Router();

//authMiddleware
const { protectRoute, admin } = require("../middleware/authMiddleware");

//user controllers
const { loginUser, registerUser, getUser } = require("../controllers/userController");

//routes
userRoutes.post("/login", loginUser);
userRoutes.post("/signup", registerUser);
userRoutes.get("/:id",protectRoute, getUser);

module.exports = userRoutes;
