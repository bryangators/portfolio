import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ValidateToken } from '../api/apiService';

const ProtectedRoute = () => {
    const { isLoggedIn, isLoading } = ValidateToken();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;