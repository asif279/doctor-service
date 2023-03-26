import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

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
   
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashboardLayout;