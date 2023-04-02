import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin.js'

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isAdmin,IsLoading]=useAdmin(user?.email);
    const location=useLocation();

    if (loading || IsLoading){
        return <div>Loading...</div>
    }
  if(user && isAdmin){
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRoute;