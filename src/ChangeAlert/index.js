import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ syncTodos }) {
  const {show, toggleShow} = useStorageListener(syncTodos);
  
  if(show){
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p className='ChangeAlert-txt'>
            There are recent changes. 
            Please reload the page
          </p>
          <button
            className='ChangeAlert-btn'
            onClick={() => toggleShow(false)}
          >
            Reload Page
          </button>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export { ChangeAlert };