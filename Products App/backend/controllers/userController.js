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
            name: user.name,
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
    const { name, email, password } = req.body;

    try {
        const user = await User.signup(name, email, password);
        const token = createToken(user._id);
        res.json({
            _id: user._id,
            name: user.name,
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
        user.name = req.body.name || user.name;
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
    const users = await User.find({});
    res.json({ users });
};

//deleteUser controller
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404);
        throw new Error("This user could not be found.");
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
