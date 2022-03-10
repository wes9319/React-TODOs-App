import React from 'react';
import './TodoError.css';

function TodoError() {
  return (
    <div className='TodoError'>
      <img 
        src="https://img.icons8.com/dotty/80/ffffff/error--v1.png"
        alt="Error Icon"
      />
      <p className='TodoError-p'>Sorry, something went wrong.</p>
    </div>
  )
}

export { TodoError };