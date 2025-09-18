import React from 'react'
import {useForm} from 'react-hook-form'
import '../styles/footer.css'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'

const Footer = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()

  const validateForm = (data) => {
    console.log(data)
  }
  return (
    <>
      <footer className="footer">
        <form id='email-form'>
          <div className="footer-grid">
            <div className="email-cont">
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder="example@email.com" id="email" name="email"
                  className={errors.name ? "error-border" : "email-default" }
                  {...register("email", {
                    required: "Please enter your email",
                    pattern:{
                      value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message:"Please enter a valid email address"
                    }
                  })}
                
                />
                {errors.email && <div className="error-message">
                  {errors.email.message} 
                  </div> 
                }
                <button className='submitButton' type='submit'>Suscribe</button>
                
                
              </div>
              <div className="quick-link-cont">
                <h4>Quick Links</h4>
                <Link className='quick-links' to={'/'}>Home</Link>
                <Link className='quick-links' to={'/products'}>Products</Link>
              </div>
            </div>
        </form>
        <p>© 2025 StyleMart. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer