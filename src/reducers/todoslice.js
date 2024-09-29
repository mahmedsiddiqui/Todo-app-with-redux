
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
  });
  
  export const removeTodo = (index) => ({
    type: 'REMOVE_TODO',
    payload: index
  });

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from './actions';

const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
    </div>
  );
};

export default Todo;
  