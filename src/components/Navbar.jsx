import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-ellipsis fa-lg"></i>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/" className="nav">Home</Link></li>
        <li><Link to="/AboutUs" className="nav">About Us</Link></li>
        <li><Link className="nav">Pricing</Link></li>
        <li><Link to="/signup" className="nav">Sign Up</Link></li>
        <li><Link className="nav">LogIn</Link></li>
        <li><Link to="/settings" className="nav"><i className="fa-solid fa-gear"></i></Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
