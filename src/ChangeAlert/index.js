import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({show, toggleShow}) {
  if(show){
    return (
      <div>
        <p>There are recent changes</p>
        <button
          onClick={() => toggleShow(false)}
        >
          Reload Page
        </button>
      </div>
    )
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };