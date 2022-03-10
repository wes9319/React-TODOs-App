import React from 'react';
import { TodoIcon } from '.';

function CompleteIcon({completed, onClick }) {
  return (
    <TodoIcon
      type={completed ? 'checkDone' : 'check'}
      color={completed ? "#4caf50" : "#121212"}
      onClick={onClick}
    />
  )
}

export { CompleteIcon };