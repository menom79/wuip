// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    setValue(value + 1);
  };

  const decreaseValue = () => {
    setValue(value - 1);
  };

  return (
    <div className="App">
      <div className="valueContainer">
        <p>Value: {value}</p>
      </div>
      <div className="buttonContainer">
        <button onClick={decreaseValue} className="decreaseButton">Decrease</button>
        <button onClick={increaseValue} className="increaseButton">Increase</button>
      </div>
    </div>
  );
};

export default App;
