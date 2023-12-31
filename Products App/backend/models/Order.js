const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
        },
        username: {
            type: String,
            required: true,
            ref: "User",
        },
        userEmail: {
            type: String,
            required: true,
            ref: "User",
        },
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
            },
        ],
        shippingAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true },
        },
        paymentMethod: {
            type: String,
            default: false,
        },
        paymentDetails: {
            orderId: { type: String },
            payerId: { type: String },
        },
        shippingPrice: {
            type: Number,
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            default: 0.0,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
