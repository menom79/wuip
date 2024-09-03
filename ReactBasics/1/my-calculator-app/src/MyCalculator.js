import React, { useState } from 'react';

const MyCalculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const buttonPressed = (calc) => {
    if (calc === '+') setResult(parseInt(number1) + parseInt(number2));
    else if (calc === '-') setResult(parseInt(number1) - parseInt(number2));
    else if (calc === '*') setResult(parseInt(number1) * parseInt(number2));
    else if (calc === '/') setResult(parseInt(number1) / parseInt(number2));
  };

  return (
    <div className="calculator">
      <div>
        Number 1: <input
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          style={{ textAlign: 'right' }}
        />
      </div>
      <div>
        Number 2: <input
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          style={{ textAlign: 'right' }}
        />
      </div>
      <div>
        <button onClick={() => buttonPressed('+')}>+</button>
        <button onClick={() => buttonPressed('-')}>-</button>
        <button onClick={() => buttonPressed('*')}>*</button>
        <button onClick={() => buttonPressed('/')}>/</button>
      </div>
      <div>
        Result: <input value={result} style={{ textAlign: 'right' }} readOnly />
      </div>
    </div>
  );
};

export default MyCalculator;
