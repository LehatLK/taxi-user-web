import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MappHeader from './mappheader';
import './mapp.css'
import Map from './map';

function Mapp() {
  return (
    <div>
    <MappHeader />
    <div className="map-container">
      <Map />
      <div className="link-section">
        <h2>Clickable Links</h2>
        <ul>
          <li><a href="#">My Trips</a></li>
          <li><a href="#">My Profile</a></li>
          <li><a href="#">Payments</a></li>
        </ul>
      </div>
    </div>
  </div>

  );
}

export default Mapp;