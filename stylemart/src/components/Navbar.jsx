import {NavLink} from 'react-router-dom'
import logo from '../assets/images/stylemart-logo-transparent.png'
import '../styles/Navbar.css'
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
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
          <span className="cart-count">5</span>
        </NavLink>
      </div>
    </nav>

  );
};

export default Navbar