import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Map from './map.jsx'

function MyTrips() {
  const [trips, setTrips] = useState([
    { id: 1, name: 'Trip to Paris', destination: { lat: 48.8566, lng: 2.3522 } },
    { id: 2, name: 'Trip to Tokyo', destination: { lat: 35.6895, lng: 139.6917 } },
    // Add more trips here
  ]);

  return (
    <div>
<Map></Map>
      <h2>My Trips</h2>
      <TripsList trips={trips} />
        </div>
  );
}

function TripsList({ trips }) {
  return (
    <ul>
      {trips.map(trip => (
        <li key={trip.id}>{trip.name}</li>
      ))}
    </ul>
  );
}

export default MyTrips;
