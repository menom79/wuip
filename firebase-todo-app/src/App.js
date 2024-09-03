import React from 'react';
import ToDoFormAndList from './ToDoFormAndList';
import LoginComponent from './LoginComponent';
import './App.css';

function App() {
  return (
    <div>
      <h1>Todo Example with React</h1>
      <LoginComponent />
      <ToDoFormAndList />
    </div>
  );
}

export default App;
