const User = require("../models/User");
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

        res.json({ email, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//signup controller
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.signup(name, email, password);
        const token = createToken(user._id);
        res.json({ email, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//updateUserProfile controller
const updateUserProfile = async (req, res) => {};

//getUserOrders controller
const getUserOrders = async (req, res) => {};

//getAllUsers controller
const getAllUsers = async (req, res) => {
    const users = await User.find({});
};

//deleteUser controller
const deleteUser = async (req, res) => {};

module.exports = {
    loginUser,
    registerUser,
    updateUserProfile,
    getUserOrders,
    getAllUsers,
    deleteUser,
};
