import React from 'react';
import Header from './header';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './mapp.css';
import Map from './map';



function Mapp() {
  return (
    <div className="map-app-container">
      <div className="map-content">
        <Map />
        <div className="map-link-section">
          <ul>
          <li className="my-trips"><a href="mytrips">My Trips</a></li>
            <li><a href="#">My Profile</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mapp;
