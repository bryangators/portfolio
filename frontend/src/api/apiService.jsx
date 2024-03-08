// apiService.js
import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL_DEVELOPMENT;   // Replace with your API base URL

const apiService = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchGet = async (endpoint, headers = {}) => {
    try {
        const options = { headers };
        
        if (headers && headers.Authorization) {
            options.withCredentials = true;
        }

        const response = await apiService.get(endpoint, options)  

        return response.data; 
    } catch (error) {
        throw error;
    }
};

export const fetchPost = async (endpoint, data, headers = {}) => {
    try {
        const options = { headers };
        
        if (headers && headers.Authorization) {
            options.withCredentials = true;
        }

        const response = await apiService.post(endpoint, data, options)   

        return response;
    } catch (error) {
        throw error;
    }
};

export const fetchPut = async (endpoint, data, headers = {}) => {  
    try {
        const options = { headers };
        
        if (headers && headers.Authorization) {
            options.withCredentials = true;
        }

        const response = await apiService.put(endpoint, data, options)   

        return response;
    } catch (error) {
        throw error;
    } 
};

export const fetchDelete = async (endpoint, headers = {}) => {
    try {
        const options = { headers };
        
        if (headers && headers.Authorization) {
            options.withCredentials = true;
        }
        
        const response = await apiService.delete(endpoint, options)   

        return response;
    } catch (error) {
        throw(error);
    }
};

