import { useState, useEffect } from 'react';
import { fetchGet } from './apiService';

const ValidateToken = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // For loading state

    useEffect(() => {
        const validateToken = async () => {
            try {
                const response = await fetchGet('/verify_token/', true);
                setIsLoggedIn(true);
            } catch (error) { 
                setIsLoggedIn(false);
            } finally {
                setIsLoading(false);
            }            
        };
        validateToken();
    }, []);

    return { isLoggedIn, isLoading };
}

export default ValidateToken;