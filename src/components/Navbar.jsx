import {NavLink , Link} from 'react-router-dom'
import logo from '../assets/images/stylemart-logo-transparent.png'
import '../styles/navbar.css'
import { IoCartOutline } from "react-icons/io5";
import { useContext , useState } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
       <NavLink to="/" className="logo-link">
        <img src={logo} alt="StyleMart Logo" className="logo" />
       </NavLink>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="/products" 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>

        <NavLink 
          to="/cart" 
          className="cart-link"
        >
          <IoCartOutline size={28} className='cart-icon' />
          <span className="cart-count">{cartItemCount}</span>
        </NavLink>
      </div>

      {/* <div className="mobile-icons">
        <Link to="/cart">
          <IoCartOutline size={28} className='cart-icon' />
          <span className="cart-count">{cartItemCount}</span>
        </Link>
        <span
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </span>
      </div>

      <div className={`dropdown ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
      </div> */}
    </nav>

  );
};

export default Navbar