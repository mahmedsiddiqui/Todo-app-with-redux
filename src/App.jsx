

import React, { useState } from 'react';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const editTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const saveTodo = () => {
    const updatedTodos = todos.map((todo, index) => (index === editIndex ? inputValue : todo));
    setTodos(updatedTodos);
    setInputValue('');
    setEditIndex(null);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App Using React-Redux</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Add a new todo" 
      />
      <button onClick={editIndex !== null ? saveTodo : addTodo}>
        {editIndex !== null ? 'Save' : 'Add'}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
