import React from 'react';
import './App.css'; // Create App.css for styling
import Person from './Person';

const persons = [
  {
    name: "Kirsi Kernel",
    image: "https://randomuser.me/api/portraits/women/31.jpg"
  },
  {
    name: "Matti Mainio",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Matti Merkusson",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];

const App = () => {
  return (
    <div className="App">
      {
        persons.map((person, index) => (
          <Person key={index} person={person} />
        ))
      }
    </div>
  );
};

export default App;
