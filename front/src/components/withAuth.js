import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const authToken = localStorage.getItem('token');

    if (authToken) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
};

export default withAuth;
