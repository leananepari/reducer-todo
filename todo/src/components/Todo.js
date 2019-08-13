import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

function Todo({ todo, toggleCompleted }) {
  const [completed] = useState('completed');

  return (
    <div className={todo.completed ? completed : null}
         onClick={() => toggleCompleted(todo.id)}
         style={{fontSize: '18px', padding: '10px'}}
    >
      <Icon name="check" style={{color: '#9bf59b', display: `${todo.completed ? 'inline-block' : 'none'}`}} />
      {todo.item}
    </div>
  )
}

export default Todo;