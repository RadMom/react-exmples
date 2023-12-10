const User = require("../models/User");
const Order = require("../models/Order");
const jwt = require("jsonwebtoken");
const { validateObjectId } = require("../middleware/validateObjectId");

// JWT then uses the sign() method to create a JSON Web Token for that user
//  and returns the token in the form of a JSON string.
//createToken function which we will use in login and signup functions.
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//login controller
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        //login is from userSchema.statics.login in User.js
        const user = await User.login(email, password);
        //create JWT token
        const token = createToken(user._id);

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//register controller
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.signup(username, email, password);
        const token = createToken(user._id);
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//updateUserProfile controller
const updateUserProfile = async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }
    } else {
        res.status(404);
        throw new Error("User not found !");
    }
};

//getAllUsers controller

// Route for fetching users
const getAllUsers = async (req, res) => {
    try {
        const { page, limit, searchBy, search } = req.query;

        let query = {};

        // Handle different search criteria
        if (searchBy === "id" && search.length > 0) {
            if (validateObjectId(search)) {
                const user = await User.findById(search);
                if (user) {
                    return res.status(200).json({ users: [user], totalPages: 1, currentPage: 1 });
                } else {
                    return res.status(404).json({ message: "User not found." });
                }
            } else {
                res.status(404);
                throw new Error("Invalid userId");
            }
        } else if (searchBy === "name" && search.length > 0) {
            query.username = { $regex: new RegExp(search, "i") };
        }

        console.log(query);
        const users = await User.find(query)
            .skip((page - 1) * limit)
            .limit(limit);

        const totalUsers = await User.countDocuments(query);

        return res.json({
            users,
            totalPages: Math.ceil(totalUsers / limit),
            currentPage: parseInt(page),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//deleteUser controller
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404);
            throw new Error("User not found");
        }
        res.json(user);
    } catch (err) {
        res.status(404);
        throw new Error(err.message);
    }
};

module.exports = {
    loginUser,
    registerUser,
    updateUserProfile,
    getAllUsers,
    deleteUser,
};
