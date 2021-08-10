import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useState } from 'react';
import db from '../firebase/config';

const Form = ({ setTodos }) => {
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({ todo: input });
    setInput('');
  };

  return (
    <>
      <FormControl>
        <InputLabel>Todo</InputLabel>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        disabled={!input}
        onClick={addTodo}
      >
        Add Todo
      </Button>
    </>
  );
};

export default Form;
