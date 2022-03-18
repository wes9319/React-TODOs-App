import React from 'react';

function useStorageListener(syncTodos) {
  const [storageChange, setStorageChange] = React.useState(false);
  
  window.addEventListener('storage', (change) => {
    if(change.key === 'TODOS_V1'){
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    syncTodos();
    setStorageChange(false);
  }

  return {
    show: storageChange,
    toggleShow: toggleShow,
  };
}

export { useStorageListener };