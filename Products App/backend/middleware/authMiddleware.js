const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protectRoute = async (req, res, next) => {
    const { authorization } = req.body;
    if (!authorization) {
        return res.status(401).json({ message: "Not authorized !!!" });
    }

    const token = authorization.split(" ")[1];
    try {
        const decoded = jwt.verify(token, proces.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        console.log(req.user);
        next();
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, token failed !!!" });
    }
};

const admin = async (req, res, next) => {
    if (req.user && req.user.isAdmin !== false) {
        console.log(req.user.isAdmin);
        next();
    } else {
        return res.status(401).json({ message: "Not authorized as ADMIN !!!" });
    }
};

module.exports = { protectRoute, admin };
