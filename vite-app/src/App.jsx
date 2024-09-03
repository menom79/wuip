import React, { useEffect, useState } from 'react';
// import { hello } from '../netlify/functions/hello';

function App() {
  const [message, setMessage] = useState('');
  const getMessage = async () => {
    const response = await fetch('./netlify/functions/hello');
    console.log(response)
    const data = await response.json();
    console.log(data);
    setMessage(data.message);
  }
  getMessage()
  // useEffect(() => {
  //   fetch('/.netlify/functions/hello.js')
  //     .then((response) => {
  //       console.log(response)
  //       return response.json()})
  //     .then((data) =>{ 
  //       console.log(data);
  //       setMessage(data?.message)})
  //     .catch((error) => console.error('Error:', error));
  // }, []);

  return (
    <div>
      <h1>Menom says, Hello from Netlify Function! I don't know what else to do.</h1>
      <p>Message from Netlify function: {message}</p>
    </div>
  );
}

export default App;
