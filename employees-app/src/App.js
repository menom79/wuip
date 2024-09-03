import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Employee from './Employee';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3001/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployees();
  }, []);

  const employeeItems = employees.map((employee, index) => (
    <Employee key={index} employee={employee} />
  ));

  return <div className="App">{employeeItems}</div>;
}

export default App;
