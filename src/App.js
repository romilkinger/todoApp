import { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Todo';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput('');
  });


  return (
    <div className="App">
      <h1>Hello World 🔥</h1>
        
        
 
      <FormControl>
        <InputLabel> Write a Todo </InputLabel>
        <Input value={input} onChange = {event => setInput(event.target.value)} />
      </FormControl>

      <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">Add todo</Button>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
