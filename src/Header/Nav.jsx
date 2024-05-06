import React from 'react'
import './nav.css';
import { useNavigate } from "react-router-dom";


const Nav = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/Home");
  };

  const navigateToAbout = () => {
    navigate("/About");
  };

  return (
    <div className='nav'>
      <li>
        <ul><a onClick={navigateToHome}>Home</a></ul>
        <ul><a onClick={navigateToAbout}>About</a></ul>
      </li>
    </div>
  )
}

export default Nav