import React, { useState } from 'react';
import '../css/login.css';

const Login = () => {

    console.log('Login component rendered')

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/login', { username, password });

            if (response.status === 200) {
                // Store the user ID in localStorage
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
                    <img src="./assets/Main-Logo.png" alt="Background" />
                </div>
                <form action="submit" className="form-container">

                </form>
            </div>
        </div>
    );
};

export default Login;
