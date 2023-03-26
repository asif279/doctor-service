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
      <div className="container navbar ">
        <div className="div1">
        <h2 className='title'><Link to='/' >Dentist Service</Link></h2>

        </div>
        <div className="div2 dropdown  lg:hidden">
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
        <label htmlFor="dashboard-drawer"  tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      </div>
      
    );
};

export default Navbar;