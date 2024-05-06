import React from 'react'
import './header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className='logo' alt="" />
        <h1>Skin Cancer Detection</h1>
    </div>
  )
}

export default Header