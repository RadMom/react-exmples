const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

//user Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

//static signup method. We use signup function in userControllers.
// It can be whatever we want- userSchema.statics.pepito but we must use the same name in userController.js
userSchema.statics.signup = async function (email, password) {
    if (!email || !password) {
        throw Error("Please provide email and password");
    }

    //Check if user already exists
    const userExist = await this.findOne({ email });
    if (userExist) {
        throw Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hashedPassword });

    return user;
};

//static login method. We use login function in usrController.
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("Please provide email and password");
    }

    //Check if user exists
    const user = await this.findOne({ email });
    if (!user) {
        throw Error("User does not exist");
    }

    //Checking if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw Error("Incorrect password");
    }

    return user;
};

module.exports = mongoose.model("User", userSchema);
