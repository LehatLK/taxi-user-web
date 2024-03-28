// Header.js
import React from 'react';
import './header.css'; // Make sure to create and style your header.css

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">CityCab</h1>
      <nav className="header-nav">
        {/* Link components will be styled as tabs */}
        <a href="/ride" className="nav-link">Ride</a>
        <a href="/drive" className="nav-link">Drive</a>
        <a href="/help" className="nav-link help-link">Help</a>
      </nav>
    </header>
  );
}

export default Header;