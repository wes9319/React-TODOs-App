import React from 'react';
import { TodoIcon } from '.';

function DeleteIcon({ onClick }) {
  return (
    <TodoIcon
      type="delete"
      color="#fa6161"
      onClick={onClick}
    />
  )
}

export { DeleteIcon };