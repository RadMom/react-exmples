import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ShippingAddressForm from "./ShippingAddressForm";
import classes from "./Order.module.css";
import Cart from "../Cart/Cart";

const Order = () => {
    const cart = useSelector((state) => state.cart);
    const orderProducts = cart.products;
    const totalPrice = cart.totalPrice;
    console.log(orderProducts);
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
                {/* <Cart /> */}
            </div>
            <div className={classes["shipping-form"]}>
                <ShippingAddressForm />
            </div>
        </div>
    );
};

export default Order;
