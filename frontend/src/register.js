import React from 'react';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './register.css';
import Navbar from './navbar'; // Importing Navbar for use in the register page
import logo from './static/logo.png'; // Make sure the path is correct

const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('tutoree');

    async function registerUser(event){
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
                role
            })
        })

        const data = await response.json()

        if (data.status === 'ok') {
            // Redirect to login after successful registration
            alert('Registration successful! Please log in.');
            navigate('/login');
        } else {
            // Display the error message from the response
            alert(data.error || 'Registration failed');
        }
    }
  return (
    <>
            <Navbar />
            <div className="register-container">
                <div className="register-box">
                    <div className="register-header">
                        <img src={logo} alt="StudyBuddy Logo" className="logo" />
                        <h2>Sign Up for StudyBuddy</h2>
                    </div>
                    <form onSubmit={registerUser}>
                        <div className="input-group">
                            <label htmlFor="name">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Enter your full name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="role">Select Role</label>
                            <select 
                                id="role" 
                                name="role" 
                                value={role} 
                                onChange={(e) => setRole(e.target.value)} 
                                required
                            >
                                <option value="tutoree">Tutoree</option>
                                <option value="tutor">Tutor</option>
                            </select>
                        </div>
                        <button type="submit" className="register-button">Sign Up</button>
                    </form>
                    <div className="register-footer">
                        <p>Already have an account? <a href="/login">Log in</a></p>
                    </div>
                </div>
            </div>
        </>
  );
};

export default Register;