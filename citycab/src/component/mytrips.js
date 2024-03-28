import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MyTrips() {
  const [trips, setTrips] = useState([
    { id: 1, name: 'Trip to Paris', destination: { lat: 48.8566, lng: 2.3522 } },
    { id: 2, name: 'Trip to Tokyo', destination: { lat: 35.6895, lng: 139.6917 } },
    // Add more trips here
  ]);

  return (
    <div>
      <h2>My Trips</h2>
      <TripsList trips={trips} />
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', marginTop: '20px', border: '2px solid #ccc' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {trips.map(trip => (
          <Marker key={trip.id} position={trip.destination}>
            <Popup>
              <strong>{trip.name}</strong> - {trip.destination.lat}, {trip.destination.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
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
