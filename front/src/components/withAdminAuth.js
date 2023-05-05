import React from 'react';
import { Navigate } from 'react-router-dom';

const withAdminAuth = (WrappedComponent) => {
  return (props) => {
    const currentUser = JSON.parse(localStorage.getItem('token'));
    
    if (currentUser && currentUser.is_staff) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
};

export default withAdminAuth;
