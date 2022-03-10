import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <span 
      className='CreateTodoButton'
      onClick={onClickButton}
    >
      +
    </span>
  )
}

export { CreateTodoButton };