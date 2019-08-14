import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Icon } from 'semantic-ui-react';


function InputField( { addTodo, clearCompleted }) {
  const [input, setInput] = useState('');
  const [date, setDate] = useState(new Date());
  const [display, setDisplay] = useState('none');
  const [icon, setIcon] = useState("calendar alternate outline");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const calendarInput = (date) => {
    console.log({date}, new Date())
  }

  const displayCalendar = () => {
    if (display === 'none') {
      setDisplay('inline');
      setIcon('calendar alternate')
    } else {
      setDisplay('none');
      setIcon("calendar alternate outline")
    }
  }

  return (
    <label style={{fontSize: '16px', fontWeight: '600', color: '#6b396d'}}>
      TODO 
      <input
        name="todo"
        placeholder="...todo"
        value={input}
        onChange={handleChange}
        style={{width: '200px', margin: '20px 5px 20px 5px', height: '30px', outline: 'none'}}
      />
      DUE
      <Icon name={icon} onClick={displayCalendar} style={{margin: '5px'}}/>
      <button onClick={() => {
        addTodo(input)
        setInput('')
        }}
        style={{width: '150px', height: '35px', background: '#8ec17b', border: '0px solid transparent', color: 'white', fontWeight: '600', outline: 'none', marginRight: '10px'}}
        >ADD</button>
      <button onClick={clearCompleted}
              style={{width: '150px', height: '35px', background: '#a7a793', border: '0px solid transparent', color: 'white', fontWeight: '600', outline: 'none'}}
      >CLEAR</button>
      <div style={{width: '40px', margin: '0 auto', display: `${display}`, }}>
          <Calendar 
              value={date}
              onChange={calendarInput}
          />
      </div>
    </label>
  )
}

export default InputField;