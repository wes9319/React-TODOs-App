import React from "react";

function useLocalStorage(itemName, initialValue) {
  
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
  
  const {
    loading,
    error,
    item,
    syncItem,
  } = state;

  //Action Creators
  const onError = (error) => dispatch({
    type: actionTypes.error,
    payload: error
  });

  const onSuccess = (parsedItem) => dispatch({
    type: actionTypes.success,
    payload: parsedItem
  });

  const onSave = (newItem) => dispatch({
    type: actionTypes.save,
    payload: newItem
  });

  const onSync = () => dispatch({
    type: actionTypes.sync,
  });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem= localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [syncItem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  }

  const sync = () => {
    onSync();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sync,
  };
}

const initialState = ({ initialValue }) => ({
  loading: true,
  error: false,
  item: initialValue,
  syncItem: true,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sync: 'SYNC',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    syncItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sync]: {
    ...state,
    loading: true,
    syncItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };