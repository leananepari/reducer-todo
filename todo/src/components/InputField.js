import React, { useState } from 'react';


function InputField( { addTodo, clearCompleted }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <label style={{fontSize: '16px', fontWeight: '600', color: '#6b396d'}}>
      TODO 
      <input
        name="todo"
        placeholder="...todo"
        value={input}
        onChange={handleChange}
        style={{width: '200px', margin: '20px 20px 20px 5px', height: '30px', outline: 'none'}}
      />
      <button onClick={() => {
        addTodo(input)
        setInput('')
        }}
        style={{width: '150px', height: '35px', background: '#8ec17b', border: '0px solid transparent', color: 'white', fontWeight: '600', outline: 'none', marginRight: '10px'}}
        >ADD</button>
      <button onClick={clearCompleted}
              style={{width: '150px', height: '35px', background: '#a7a793', border: '0px solid transparent', color: 'white', fontWeight: '600', outline: 'none'}}
      >CLEAR</button>
    </label>
  )
}

export default InputField;