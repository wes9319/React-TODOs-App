import React from 'react';
import { 
  IoCheckmarkCircleSharp, 
  IoCheckmarkDoneCircleSharp,
  IoCloseCircleSharp,
} from 'react-icons/io5'; 
import './TodoIcon.css';

function TodoIcon({ type, color = "#121212", onClick}) {
  const icons = {
    check: (
      <IoCheckmarkCircleSharp className="Icon Icon--check" fill={color}/>
    ),
    checkDone: (
      <IoCheckmarkDoneCircleSharp className="Icon Icon--checkDone" fill={color}/>
    ),
    delete: (
      <IoCloseCircleSharp className="Icon Icon--delete" fill={color}/>
    ),
  };
  return (
    <span 
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {icons[type]}
    </span>
  )
}

export { TodoIcon };