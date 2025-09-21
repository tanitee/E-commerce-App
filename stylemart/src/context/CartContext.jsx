import { createContext, useState , useEffect } from "react"


export const CartContext = createContext();
const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState(()=> {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
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
        const updatedCart = setCart((prevCart)=> prevCart.filter(item => item.id !== id));
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
    }

    const increaseQty = (id) =>{
        setCart((prevCart) =>{
            return prevCart.map((item) =>
                item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );

        })

    }

    const decreaseQty = (id) =>{
        setCart((prevCart) =>{
            return prevCart.map((item) =>
                item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
        })
    }

    const getCartTotals = () => {
        return cart.reduce((totals, item) => {
            return totals + item.price * item.quantity;
        }, 0);
    };


  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, increaseQty, decreaseQty , getCartTotals}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider