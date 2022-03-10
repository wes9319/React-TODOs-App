import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className='EmptyTodos'>
      <img 
        src="https://img.icons8.com/ios/50/ffffff/empty-box.png"
        alt="empty icon"
      />
      <p>No TODOs... yet.</p>
      <p>You can add a new one by using the + button bellow</p>
    </div>
  )
}

export { EmptyTodos };