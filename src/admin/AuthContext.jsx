import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
    const navigate = useNavigate();

    useEffect(() => {
        if (authToken) {
            localStorage.setItem('authToken', authToken);
        } else {
            localStorage.removeItem('authToken');
        }
    }, [authToken]);

    const login = async (email, password) => {
        try {
            const response = await fetch('https://portfolio-backend.saquibali353.workers.dev/api/v1/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                setAuthToken(data.jwt);
                navigate('/admin');
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed');
        }
    };

    const logout = () => {
        setAuthToken(null);
        navigate('/admin/login');
    };

    const verifyToken = async () => {
        try {
            const response = await fetch('https://portfolio-backend.saquibali353.workers.dev/api/v1/admin', {
                method: 'GET',
                headers: { 'Authorization': authToken }
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Token is valid:', data);
            } else {
                console.error('Invalid token:', data.error);
                logout(); // Invalidate token on client side if server responds with an error
            }
        } catch (error) {
            console.error('Token verification error:', error);
            logout();
        }
    };

    useEffect(() => {
        if (authToken) {
            verifyToken();
        }
    }, [authToken]);

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
