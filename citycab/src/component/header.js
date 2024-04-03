// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Säkerställ att du har skapat och stilar din header.css

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">CityCab</h1>
      <nav className="header-nav">
        {/* Använd 'Link' istället för 'a' för klient-sidig routing */}
        <Link to="/ride" className="nav-link">Ride</Link>
        <Link to="/drive" className="nav-link">Drive</Link>
        <Link to="/help" className="nav-link help-link">Help</Link>
        {/* Lägg till länken till My Profile */}
        <Link to="/myprofile" className="nav-link">My Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
