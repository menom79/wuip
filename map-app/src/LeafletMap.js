import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap = () => {
  const position = [62.2426, 25.7471]; // Coordinates for JAMK/Dynamo building

  return (
    <MapContainer center={position} zoom={16} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>JAMK/Dynamo building</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
