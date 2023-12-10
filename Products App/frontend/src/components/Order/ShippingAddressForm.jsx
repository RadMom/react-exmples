import React, { useState } from "react";

import classes from "./ShippingAddressForm.module.css";

function ShippingAddressForm({ next }) {
    const [shippingAddress, setShippingAddress] = useState({
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress({ ...shippingAddress, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        next(shippingAddress);
    };

    return (
        <div className={classes["shipping-form-container"]}>
            <h2>Shipping Address</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={shippingAddress.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={shippingAddress.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={shippingAddress.postalCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Country</label>
                    <input
                        type="text"
                        name="country"
                        value={shippingAddress.country}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit Shipping Address</button>
            </form>
        </div>
    );
}

export default ShippingAddressForm;
