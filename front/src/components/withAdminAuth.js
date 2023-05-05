import React from 'react';
import { Navigate } from 'react-router-dom';

const withAdminAuth = (WrappedComponent) => {
  return (props) => {
    const currentUser = JSON.parse(localStorage.getItem('token'));
    var Admin = localStorage.getItem("admin");
    if (Admin) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
};

export default withAdminAuth;
