import React from 'react';
import TodoContainer from '../TodoContainer.js'

export default {
  title: 'TodoContainer',
  component: TodoContainer,
};

export const NormalTodoContainer = () => <TodoContainer todos={["todo-1", "todo-2", "todo-3"]}/>;
