import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShippingAddressForm from "./ShippingAddressForm";
import classes from "./Order.module.css";
import Cart from "../Cart/Cart";
import PaymentDetails from "./PaymentDetails";
import { createOrder } from "../../redux/orders/orderActions";

const Order = () => {
    const cart = useSelector((state) => state.cart);
    const orderProducts = cart.products;
    const totalPrice = cart.totalPrice;

    const [addressDetails, setAddressDetails] = useState();
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    console.log(orderProducts);

    //Must finish order action
    const orderHandler = () => {
        dispatch(createOrder(cart.products));
    };

    const nextToPaymentDetails = (address) => {
        setAddressDetails(address);
        setShowPaymentForm((state) => !state);
        console.log(address);
    };
    return (
        <div className={classes["order-container"]}>
            <div className={classes["products-details"]}>
                <table className={classes["product-table"]}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderProducts.map((product) => (
                            <tr key={product.id} className={classes["product-item"]}>
                                <td>
                                    <p>{product.name}</p>
                                </td>
                                <td>
                                    <p>${product.price}</p>
                                </td>
                                <td>
                                    <p>{product.quantity}</p>
                                </td>
                                <td>
                                    <p>${product.totalPriceForItem}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className={classes["total-price"]}>Total price: {totalPrice}</p>
                {addressDetails && (
                    <address>
                        <p>Address : {addressDetails.address}</p>
                        <p>City : {addressDetails.city}</p>
                        <p>Postal Code : {addressDetails.postalCode}</p>
                        <p>Country : {addressDetails.country}</p>
                    </address>
                )}
            </div>
            {!showPaymentForm ? (
                <div className={classes["shipping-form"]}>
                    <ShippingAddressForm next={nextToPaymentDetails} />
                </div>
            ) : (
                <div className={classes["payment-details"]}>
                    <PaymentDetails />
                </div>
            )}
        </div>
    );
};

export default Order;
