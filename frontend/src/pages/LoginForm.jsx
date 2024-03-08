import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchPost } from '../api/apiService';

function LoginForm() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const response = await fetchPost('/login/', {
            username,
            password
        });

        // Successful login
        localStorage.setItem('access_token', response.data.access);

        navigate("/admin");

        } catch (error) {
        if (error.response && error.response.status === 401) {
            setErrorMessage('Invalid username or password');
        } else {
            setErrorMessage('An error occurred. Please try again later.');
        }
        }
    };

    return (
        <form onSubmit={handleSubmit} className='m-5'>
        {errorMessage && <div className="error-message m-3">{errorMessage}</div>}
        <div className='mb-3'>
            <label htmlFor="username" className='me-2'>Username:</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className='mb-3'>
            <label htmlFor="password" className='me-2'>Password:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <Button variant='outline-dark' type="submit">Login</Button>
        </form>
    );
}

export default LoginForm;