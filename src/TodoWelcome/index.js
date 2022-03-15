import React from 'react';
import './TodoWelcome.css';

function TodoWelcome({ loading }) {
  return (
    <h1 className={`TodoWelcome ${!!loading && "TodoWelcome--loading"}`}>
      🎉 Welcome back 🎉
    </h1>
  )
}

export { TodoWelcome };