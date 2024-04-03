import React from 'react';
import Header from './header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './mapp.css';
import Map from './map';

function Mapp() {
  return (
    <div className="map-app-container">
      <div className="map-content">
        <Map />
        <div className="map-link-section">
          <ul>
            <li className="my-trips"><Link to="/mytrips">My Trips</Link></li>
            <li><Link to="/myprofile">My Profile</Link></li>
            <li><Link to="/payments">Payments</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mapp;
