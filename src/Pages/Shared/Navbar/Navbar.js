import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import './Navbar.css'

const Navbar = () => {

  const {user,logOut}= useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
  }

   

   
    return (
      <div className="container">
        <div className="div1">
        <h2 className='title'><Link to='/' >Dentist Service</Link></h2>

        </div>
        <div className="div2">
        <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/review'>Reviews</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>
    { 
      user?.uid?

      <>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><button onClick={handleLogOut}>Sign Out</button></li>
      </>
      
      :

     
      
        <li><Link to='/login'>Login</Link></li>
      
      }
        </div>
      </div>
    );
};

export default Navbar;