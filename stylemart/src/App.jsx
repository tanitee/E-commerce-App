import {Route, createBrowserRouter, RouterProvider , createRoutesFromElements} from 'react-router-dom'
import './App.css'
import MainLayouts from './components/MainLayouts'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import OrderConfirmation from './pages/OrderConfirmation'
import Checkout from './pages/Checkout'
import ProductDetails from "./pages/ProductDetails";


function App() {
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

  return <RouterProvider router={router} />;
}

export default App
