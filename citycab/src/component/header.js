import React from 'react';
import './header.css'; // Import the CSS file

function Header() {
  return (
    <header className="App-header">
      <div className="App-header-text">CityCab</div>
      <nav className="header-nav">
        {/* Other navigation links can be added here */}
        <a href="#" className="help-link">Help</a>
      </nav>
    </header>
  );
}

export default Header;

