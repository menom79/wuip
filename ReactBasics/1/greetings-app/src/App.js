// App.js
import React from 'react';
import './App.css';

const App = () => {
  const names = ["Arska", "Basso", "Mixu"];

  return (
    <div className="App">
      {names.map((name, index) => (
        <p key={index}>
          Hello {name}!
        </p>
      ))}
    </div>
  );
};

export default App;
