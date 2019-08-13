import React, { useState } from 'react';


function InputField( { addTodo }) {
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
    </label>
  )
}

export default InputField;