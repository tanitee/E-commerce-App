import {useForm} from "react-hook-form"
import { CartContext } from '../context/CartContext'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "../styles/checkout.css"

const Checkout = () => {
  const {clearCart} = useContext(CartContext)

   const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);

    // Clear cart
    clearCart();

    // Redirect to Order Confirmation
    navigate("/order-confirmation" , { state: { orderData: data } });
  };
   

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Shipping Info */}
        <h3>Shipping Details</h3>
        <input 
          placeholder="Full Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input 
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format"
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input 
          placeholder="Address"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && <p>{errors.address.message}</p>}

        <input 
          placeholder="Phone"
          {...register("phone", { 
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Invalid phone number"
            }
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}

        {/* Payment Info */}
        <h3>Payment Details</h3>
        <input 
          placeholder="Card Number"
          {...register("cardNumber", { 
            required: "Card number is required",
            pattern: {
              value: /^[0-9]{16}$/,
              message: "Card must be 16 digits"
            }
          })}
        />
        {errors.cardNumber && <p>{errors.cardNumber.message}</p>}

        <input 
          placeholder="Expiry (MM/YY)"
          {...register("expiry", { 
            required: "Expiry date is required",
            pattern: {
              value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
              message: "Invalid expiry format"
            }
          })}
        />
        {errors.expiry && <p>{errors.expiry.message}</p>}

        <input 
          placeholder="CVV"
          {...register("cvv", { 
            required: "CVV is required",
            pattern: {
              value: /^[0-9]{3,4}$/,
              message: "Invalid CVV"
            }
          })}
        />
        {errors.cvv && <p>{errors.cvv.message}</p>}

        <button className="order-button" type="submit">Place Order</button>
      </form>
    </div>
  )
}

export default Checkout