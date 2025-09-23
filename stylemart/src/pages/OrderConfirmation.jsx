import React from 'react'
import { useLocation , Link } from "react-router-dom";

const OrderConfirmation = ({data}) => {
  const location = useLocation();
  const { orderData } = location.state || {};

  return (
    <div>
      <h2>Order Confirmed 🎉</h2>
      <p>Thank you, {orderData?.name}!</p>
      <p>Your order will be shipped to {orderData?.address}.</p>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
}

export default OrderConfirmation