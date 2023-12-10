import React from "react";

function PaymentDetails() {
    const handlePayment = () => {
        console.log("payment");
    };
    return (
        <div>
            <div>Payment Form</div>
            <button onClick={handlePayment}>Pay</button>
        </div>
    );
}

export default PaymentDetails;
