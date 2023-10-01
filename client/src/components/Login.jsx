import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import '../css/login.css';

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, []);

    const handleGoogleLogin = async (e) => {
        window.open('http://localhost:3000/auth/google', '_self');
    };
    return (
        <main className="container">
            <h3>Choose Login method</h3>
            <div className="login google" onClick={handleGoogleLogin}>
                <FaGoogle size={40} className="icon" />
                Google
            </div>
        </main>
    );
}

export default Login;
