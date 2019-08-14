import React from 'react';
import Todo from './Todo';

function TodoList({ list, toggleCompleted }) {

  return (
    <div style={{width: '500px', margin: '0 auto',textAlign: 'left', border: '0.1px solid #6b396d'}}>
      {list.map(todo => {
        return <Todo todo={todo} key={todo.id} toggleCompleted={toggleCompleted} />
      })}
    </div>
  )
}

export default TodoList;