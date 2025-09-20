import { createContext, useState } from "react"

const CartContext = ({children}) => {
    const CartContext = createContext();
    const [cart, setCart] = useState([]);

    const addToCart = (product, qty) =>{

    }
    const removeFromCart = (id) =>{

    }

    const increaseQty = (id) =>{

    }

    const decreaseQty = (id) =>{

    }

    const getCartTotals = () => {}

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, increaseQty, decreaseQty , getCartTotals}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext