'use client';
import { useState } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4 text-black">To-Do List</h1>
      <input 
        type="text" 
        className="border p-2 w-full rounded mb-2 text-black"
        placeholder="Enter a task..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        onClick={addTask} 
        className="bg-blue-500 text-black px-4 py-2 rounded w-full mb-4"
      >
        Add by ST
      </button>

      <button 
        onClick={addTask} 
        className="bg-blue-500 text-black px-4 py-2 rounded w-full mb-4"
      >
        Add by GHALLEY
      </button>
  
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="border-b py-2 text-black" >{task}</li>
        ))}
      </ul>
    </div>
  );
}