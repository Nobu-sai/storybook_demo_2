import React from 'react'
import Todo from './Todo.js'
import './TodoContainer.css'
import { v4 as uuidv4 } from 'uuid';

function TodoContainer({todos}) {
  return (
    <div className="todoContainer">
      {
      todos.map((todo)=>(
        <Todo title={todo} key={uuidv4()}/>
      ))
      }
    </div>
  )
}

export default TodoContainer
