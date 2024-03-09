// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/signup', {
                fullName,
                email,
                password,
                role
            });
            alert('Signup successful');
            // Redirect or perform other actions upon successful signup
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred');
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" required />
                <button type="submit">Signup</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default SignupForm;
