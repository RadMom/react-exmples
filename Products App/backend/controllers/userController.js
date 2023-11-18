const User = require("../models/User");
const Order = require("../models/Order");
const jwt = require("jsonwebtoken");

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
            idAdmin: user.isAdmin,
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
            idAdmin: user.isAdmin,
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

//getUserOrders controller
const getUserOrders = async (req, res) => {
    const orders = await Order.find({ user: req.params.id });
    if (orders) {
        res.json(orders);
    } else {
        res.status(404);
        throw new Error("No Orders found for this User");
    }
};

//getAllUsers controller
const getAllUsers = async (req, res) => {
    console.log(req.query);
    try {
        const { pagination, searchBy, search } = req.query;
        const page = pagination.page;
        const limit = pagination.limit;

        console.log(req.query);

        if (searchBy === "id") {
            const user = await User.findById(search);
            if (user) {
                return res.status(200).json(user);
            } else {
                res.status(404);
                throw new Error("User not found.");
            }
        }
        let query = {};

        if (searchBy && searchInput) {
            if (searchBy === "id") {
                query[searchBy] = searchInput;
            } else if (searchBy === "name") {
                query[searchBy] = { $regex: new RegExp(search, "i") };
            } else {
                res.status(400);
                throw new Error("invalid search parameter");
            }
        }

        let sortOptions = {};
        if (sortBy) {
            if (sortBy === "1") {
                sortOptions.name = 1;
            } else {
                sortOptions.name = -1;
            }
        }
        console.log("userController-query: " + query);
        const users = await User.find(query)
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(limit);

        console.log(users.length);
        // Count total products for pagination
        const totalUsers = await User.countDocuments(query);

        if (users) {
            console.log(users);
            res.json({
                users,
                pagination: {
                    totalPages: Math.ceil(totalUsers / limit),
                    currentPage: parseInt(page),
                },
            });
        } else {
            res.status(404);
            throw new Error("User not found.");
        }
    } catch (error) {
        res.json(error);
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
    getUserOrders,
    getAllUsers,
    deleteUser,
};
