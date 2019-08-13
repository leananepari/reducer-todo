import React from 'react';
import Todo from './Todo';

function TodoList({ list, toggleCompleted }) {
console.log('todo list')
  return (
    <div>
      {list.map(todo => {
        return <Todo todo={todo} key={todo.id} toggleCompleted={toggleCompleted} />
      })}
    </div>
  )
}

export default TodoList;