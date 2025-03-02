import React from 'react'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react'
import { store } from '../App'
import './styles/navbar.css'
const Navbar = () => {
  const [token,setToken]=useContext(store)
  return (
    <nav className="navbar">
    {/* Logo */}
    <div className="navbar-logo">
      <img 
        src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" 
        alt="TaskMaster" 
      />
      <span>TaskMaster</span>
    </div>

    {/* Navbar Links */}
    {!token && (
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login" className="navbar-button login-btn">Login</Link>
        <Link to="/signup" className="navbar-button signup-btn">Sign Up</Link>
      </div>
    )}
  </nav>
  )
}

export default Navbar