import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ValidateToken = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // For loading state

    useEffect(() => {
        const validateToken = async () => {
            const apiUrl = import.meta.env.VITE_API_BASE_URL_DEVELOPMENT; // Get your API URL
            const token = localStorage.getItem('access_token');

            if (token) {
                try {
                    const response = await axios.get(apiUrl + '/verify_token/', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setIsLoggedIn(true);
                } catch (error) { 
                    setIsLoggedIn(false);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoggedIn(false);
                setIsLoading(false);
            }
        };
        validateToken();
    }, []);

    return { isLoggedIn, isLoading };
}

export default ValidateToken;