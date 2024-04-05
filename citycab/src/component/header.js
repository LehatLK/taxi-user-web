import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Säkerställ att du har skapat och stilar din header.css

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">
        <Link to="/" className="nav-link">CityCab</Link> {/* Gör "CityCab" till en hem-länk */}
      </h1>
      <nav className="header-nav">
        <Link to="/ride" className="nav-link">Ride</Link>
        <Link to="/drive" className="nav-link">Drive</Link>
        <Link to="/help" className="nav-link help-link">Help</Link>
      </nav>
    </header>
  );
}

export default Header;
