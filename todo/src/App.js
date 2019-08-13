import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { initialState, todoReducer } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    dispatch({type: 'ADD_TODO', item: todo})
  }

  const toggleCompleted = (id) => {
    dispatch({type: 'TOGGLE_COMPLETED', id: id})
  }
 
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList list={state} toggleCompleted={toggleCompleted}/>
      <InputField addTodo={addTodo}/>
    </div>
  );
}

export default App;
