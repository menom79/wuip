import React from 'react';
import './Employee.css';

function Employee({ employee }) {
  const randomUserUrl = `https://randomuser.me/api/portraits/men/${employee.id}.jpg`;

  return (
    <div className="Employee">
      {employee.id ? (
        <img src={randomUserUrl} alt={`${employee.first_name} ${employee.last_name}`} />
      ) : (
        <div className="PlaceholderImage">No Photo Available</div>
      )}
      <div className="EmployeeDetails">
        <p className="name">{employee.last_name} {employee.first_name}</p>
        <p className="title">{employee.title}</p>
        <p className="position">{employee.position}</p>
        <p className="department">{employee.department}</p>
        <p className="email">{employee.email}</p>
        <p className="phone">{employee.phone}</p>
      </div>
    </div>
  );
}

export default Employee;