// MyTrips.js
import React, { useState } from 'react';
import './MyTrips.css'; // Make sure to create and style this CSS file
import Map from './map.jsx'; // Import your Map component
import Mapp from './mapp.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import BookRideButton from './button.js';

function MyTrips() {
  const [trips, setTrips] = useState([
    { id: 1, address: '348 Fillmore St, San Francisco, CA', time: '6:45 PM', date: 'Monday June 19', companion: 'Ying' },
    // ... other trips
  ]);


  return (
<div>
    <Mapp /> 
<div className="centered-container">
    <div className="my-trips-page">

    
      <BookRideButton />
    <h2>My Trips</h2>

      <div class="my-trips">
    <div class="trip-list">
      <div class="trip-item">
        <div class="time-and-location">
        <div className="time">
            <FontAwesomeIcon icon={faClock} /> 6:45 PM, Monday June 19 with Ying
          </div>
          <div class="location">348 Fillmore St, San Francisco, CA</div>
        </div>
        <div class="arrow">→</div>
      </div>

    </div>
  </div>
    </div>
    </div>
    </div>
  );
}

export default MyTrips;
