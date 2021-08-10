import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import db from './firebase/config';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            timestamp: doc.data().timestamp.toDate(),
          }))
        );
      });
  }, []);

  return (
    <div className="App-container">
      <h1>Todo App</h1>
      <Form setTodos={setTodos} />
      <ul>
        {todos.map(({ id, todo, timestamp }) => (
          <Todo key={id} todo={todo} timestamp={timestamp} />
        ))}
      </ul>
    </div>
  );
}

export default App;
