import React, { useState } from 'react';

function Todo({ todo, toggleCompleted }) {
  const [completed] = useState('completed');
console.log('TODO COMP')
  return (
    <div className={todo.completed ? completed : null}
         onClick={() => toggleCompleted(todo.id)}>
      {todo.item}
    </div>
  )
}

export default Todo;