import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

   

   
    return (
      <div className="container">
        <div className="div1">
        <h2 className='title'><Link to='/' >Doctors Service</Link></h2>

        </div>
        <div className="div2">
        <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/review'>Reviews</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>
      <li><Link to='/login'>Login</Link></li>
        </div>
      </div>
    );
};

export default Navbar;