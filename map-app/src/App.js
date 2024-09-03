import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import './App.css'; // Make sure to import your CSS file

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching golf courses:', error);
      });
  }, []);

  const position = [62, 26];
  const zoom = 7;

  const markers = courses.map((course, index) => (
    <Marker position={[course.lat, course.lng]} key={index}>
      <Popup>
        <b>{course.course}</b>
        <br />
        {course.address}
        <br />
        {course.phone}
        <br />
        {course.email}
        <br />
        <a href={course.web} target="_blank" rel="noopener noreferrer">
          {course.web}
        </a>
        <br />
        <br />
        <i>{course.text}</i>
      </Popup>
    </Marker>
  ));

  return (
    <div className="App">
      <h1>Golf Courses in Finland</h1>
      <MapContainer center={position} zoom={zoom} style={{ width: '100%', height: '500px' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>
    </div>
  );
}

export default App;
