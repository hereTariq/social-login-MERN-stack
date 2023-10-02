import React from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import '../css/login.css';

function Login() {
    const handleGoogleLogin = async (e) => {
        window.open('http://localhost:3000/auth/google', '_self');
    };
    const handleGithubLogin = async (e) => {
        window.open('http://localhost:3000/auth/github', '_self');
    };
    const handleFacebookLogin = async (e) => {
        window.open('http://localhost:3000/auth/facebook', '_self');
    };
    return (
        <main className="container">
            <h3>Choose Login method</h3>
            <div className="login google" onClick={handleGoogleLogin}>
                <FaGoogle size={40} className="icon" />
                Google
            </div>
            <div className="login github" onClick={handleGithubLogin}>
                <FaGithub size={40} className="icon" />
                Github
            </div>
            <div className="login facebook" onClick={handleFacebookLogin}>
                <FaFacebook size={40} className="icon" />
                Facebook
            </div>
        </main>
    );
}

export default Login;
