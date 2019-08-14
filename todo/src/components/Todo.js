import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import moment from 'moment';

function Todo({ todo, toggleCompleted }) {
  const [completed] = useState('completed');

  return (
    <div onClick={() => toggleCompleted(todo.id)}
         style={{fontSize: '18px', padding: '10px', borderBottom: '0.1px solid #6b396d'}}
    >
      <Icon name="check" style={{color: '#9bf59b', opacity: `${todo.completed ? '1' : '0'}`}} />
      <span className={todo.completed ? completed : null}>{todo.item}</span>
      <div style={{paddingLeft: '10px', fontSize: '10px', marginTop: '5px', height: '10px'}}>{todo.completed ? `Completed: ${moment().format('MMMM Do YYYY, h:mm:ss a')}` : null}</div>
    </div>
  )
}

export default Todo;