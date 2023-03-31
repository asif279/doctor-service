import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='bg-info'>
        <Navbar/>
        <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <Outlet/>
  
  
  </div> 
  <div className="drawer-side ">
    <label bg-primary htmlFor="dashboard-drawer" className="drawer-overlay bg-primary "></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
   
      <li><Link to="/dashboard">My Appoinment</Link></li>
      <li><Link to="/dashboard/users">Users</Link></li>
     
    </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashboardLayout;