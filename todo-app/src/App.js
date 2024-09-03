// App.js
import React from 'react';
import './App.css'; // Import your existing styles
import Banner from './Banner';
import ToDoFormAndList from './ToDoFormAndList'; // Import ToDoFormAndList component

function App() {
  return (
    <div>
      <Banner />
      <ToDoFormAndList />
    </div>
  );
}

export default App;
