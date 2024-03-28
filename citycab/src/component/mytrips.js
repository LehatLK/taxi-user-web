// MyTrips.js
import React, { useState } from 'react';
import './MyTrips.css'; // Make sure to create and style this CSS file
import Map from './map.jsx'; // Import your Map component

function MyTrips() {
  const [trips, setTrips] = useState([
    { id: 1, address: '348 Fillmore St, San Francisco, CA', time: '6:45 PM', date: 'Monday June 19', companion: 'Ying' },
    // ... other trips
  ]);

  return (
    <div className="my-trips-page">
      <Map /> {/* Render your map component */}
      <div className="trip-list-container">
        <h2 className="trip-list-title">My Trips</h2>
        <div className="trip-list">
          {trips.map(trip => (
            <div key={trip.id} className="trip-entry">
              <div className="trip-details">
                <div className="trip-address">{trip.address}</div>
                <div className="trip-time">{`${trip.time}, ${trip.date} with ${trip.companion}`}</div>
              </div>
              <div className="trip-action">
                <span className="trip-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
