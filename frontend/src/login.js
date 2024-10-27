import React from 'react';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css';
import logo from './static/logo.png';
import Navbar from './navbar'; // Correct import of Navbar component

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  async function loginUser(event){
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json()

    if (data.status === 'ok') {
      localStorage.setItem('token', data.user)
      localStorage.setItem('userType', data.tutor ? 'tutor' : 'tutoree'); 
      navigate('/dashboard')
    } else {
      alert(data)
    }
  }

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <img src={logo} alt="StudyBuddy Logo" className="logo" />
            <h2>Welcome to StudyBuddy</h2>
          </div>
          <form onSubmit={loginUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="login-button">Log In</button>
          </form>
          <div className="login-footer">
            <a href="#">Forgot password?</a>
            <a href="#">Create an account</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
