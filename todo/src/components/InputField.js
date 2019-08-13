import React, { useState } from 'react';


function InputField( { addTodo, clearCompleted }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <label>
      Add todo
      <input
        name="todo"
        value={input}
        onChange={handleChange}
      />
      <button onClick={() => {
        addTodo(input)
        setInput('')
        }}>ADD</button>
      <button onClick={clearCompleted}>CLEAR COMPLETED</button>
    </label>
  )
}

export default InputField;