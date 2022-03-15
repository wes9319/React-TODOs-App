import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      {completedTodos} out of {totalTodos} TODOs completed !
    </h2>
  )
}

export { TodoCounter };