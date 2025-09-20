import { createContext, useState } from "react"

export const CartContext = createContext();
const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product, qty = 1) =>{
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
            
            return prevCart.map((item) =>
                item.id === product.id
                ? { ...item, quantity: item.quantity + qty }
                : item
            );
            } else {
                return [...prevCart, { ...product, quantity: qty }];
            }
        });


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

export default CartProvider