import React from 'react';
import './navbar.css';
import {Link}  from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
        <Link to="/" style={{color:"inherit" , textDecoration: "none"}}><h2 className='logo'>Hotel Booking</h2></Link>   
           <div className='navItems'> 
           <button className='navButton'>Register</button>
           <button className='navButton'>Login</button>
           </div>
        </div>
    </div>
  )
}

export default Navbar