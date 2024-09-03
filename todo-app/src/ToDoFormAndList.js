// ToDoFormAndList.js
import React, { useState } from 'react';

export default function ToDoFormAndList() {
  // Declare state variables
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);

  // Handle form submission
  const handleSubmit = (event) => {
    // Prevent normal submit event
    event.preventDefault();

    // Add item to items array with a unique ID
    setItems([...items, { id: Math.random(), text: itemText }]);
    
    // Clear itemText state
    setItemText("");
  }

  // Handle item removal
  const removeItem = (id) => {
    // Filter/remove item with the specified id
    const newItems = items.filter(item => item.id !== id);
    
    // Set new items
    setItems(newItems);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={itemText}
          onChange={(event) => setItemText(event.target.value)}
          placeholder="Write a new todo here"
        />
        <input type='submit' value='Add' />
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text} <span onClick={() => removeItem(item.id)}> x </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
