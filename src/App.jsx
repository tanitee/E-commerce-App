import {Route, createBrowserRouter, RouterProvider , createRoutesFromElements} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import MainLayouts from './components/MainLayouts'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import OrderConfirmation from './pages/OrderConfirmation'
import Checkout from './pages/Checkout'
import ProductDetails from "./pages/ProductDetails";
import CartContext from './context/CartContext'

import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cart,setCart] = useState([])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts />} >
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products />} />
        <Route path="product/:id"  element={<ProductDetails onAddToCart={(p) => console.log("Added:", p)}/>}/>
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-confirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <CartContext>
      <RouterProvider router={router}/>
      <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Slide}
      />
    </CartContext>
  );
}

export default App
