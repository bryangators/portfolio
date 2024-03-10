// apiService.js
import axios from 'axios';
import { useState, useEffect } from 'react';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;   // Replace with your API base URL

const getHeaders = () => {
    const token = localStorage.getItem('access_token');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    return headers;
}

export const fetchGet = async (endpoint, requiresAuth = false) => {
    const url = API_BASE_URL + endpoint;
    try {
        let response;

        if (requiresAuth) {
            response = await axios.get(url, {headers: getHeaders()})  
        } else {
            response = await axios.get(url)
        }
        
        return response.data; 
    } catch (error) {
        throw error;
    }
};

export const fetchPost = async (endpoint, data, requiresAuth = false) => {
    const url = API_BASE_URL + endpoint;
    try {
        let response;

        if (requiresAuth) {
            response = await axios.post(url, data, {headers: getHeaders()})  
        } else {
            response = await axios.post(url, data)
        }

        return response;
    } catch (error) {
        throw error;
    }
};

export const fetchPut = async (endpoint, data, requiresAuth = false) => {
    const url = API_BASE_URL + endpoint;
    try {
        let response;

        if (requiresAuth) {
            response = await axios.put(url, data, {headers: getHeaders()})  
        } else {
            response = await axios.put(url, data)
        }

        return response;
    } catch (error) {
        throw error;
    }
};

export const fetchDelete = async (endpoint, requiresAuth = false) => {
    const url = API_BASE_URL + endpoint;
    try {
        let response;

        if (requiresAuth) {
            response = await axios.delete(url, {headers: getHeaders()})  
        } else {
            response = await axios.delete(url)
        }

        return response;
    } catch (error) {
        throw error;
    }
};

export const ValidateToken = () => {
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

