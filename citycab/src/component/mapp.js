import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import './mapp.css'
import Map from './map';

function Mapp() {
  return (
   
    <div>
     <Header />
    <div className="map-container">
      <Map />
      <div className="link-section">
        <h2>profile</h2>
        <ul>
          <li><a href="mytrips">My Trips</a></li>
          <li><a href="#">My Profile</a></li>
          <li><a href="#">Payments</a></li>
        </ul>
      </div>
    </div>
  </div>

  );
}

export default Mapp;