import React, {useState} from 'react';
import './App.css';
import Todo from './Todo.js'
import TodoContainer from './TodoContainer.js'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);  

    setInput('');
  }

  return (
    <div className="App">

      <h1>Todo App</h1>     

      <form>
        <input value={input} onChange={e => setInput(e.target.value)}></input>      
        <button disabled={!input} onClick={addTodo}>Add a new Todo</button>
      </form>      
    
      <TodoContainer todos={todos}/>        
      
    </div>
  );
}

export default App;
