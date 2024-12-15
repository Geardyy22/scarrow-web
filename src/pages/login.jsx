import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/login', { username, password });

            if (response.status === 200) {
                // Store the user ID in Local Storage
                localStorage.setItem('userId', response.data.user._id);

                // Navigate to the dashboard
                navigate('/dashboard');
            }
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        // Login Page
        <div className="login-page">
            <div className="login-container">
                <div className="image-container">
                    <img src="" alt="Background" />
                </div>
                <form className="form-container">
                    <div className="text-container">
                        <h4>Sign in</h4>
                        <p>Log in to you account</p>
                    </div>
                    <div className="field-container">
                        
                        <label htmlFor="username">email</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
