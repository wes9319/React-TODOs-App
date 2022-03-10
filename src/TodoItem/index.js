import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      {/* <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span> */}
      <CompleteIcon 
        type="check" 
        completed={props.completed} 
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      {/* <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span> */}
      <DeleteIcon
        type="delete"
        onClick={props.onDelete}
      />
    </li>
  )
}

export { TodoItem };