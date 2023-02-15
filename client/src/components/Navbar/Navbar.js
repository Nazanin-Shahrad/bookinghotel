import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
           <h2 className='logo'>Hotel Booking</h2>
           <div className='navItems'> 
           <button className='navButton'>Register</button>
           <button className='navButton'>Login</button>
           </div>
        </div>
    </div>
  )
}

export default Navbar