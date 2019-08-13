import React from 'react';
import Todo from './Todo';

function TodoList({ list, toggleCompleted }) {

  return (
    <div style={{minHeight: '170px', border: '0.3px solid #6b396d', width: '500px', margin: '0 auto', padding: '20px'}}>
      {list.map(todo => {
        return <Todo todo={todo} key={todo.id} toggleCompleted={toggleCompleted} />
      })}
    </div>
  )
}

export default TodoList;