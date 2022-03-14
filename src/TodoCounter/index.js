import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className='TodoCounter'>{completedTodos} out of {totalTodos} TODOs completed !</h2>
  )
}

export { TodoCounter };