import React from 'react';
// import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {

  const [newTodoValue, setNewTodoValue] = React.useState('');

  // const {
  //   addTodo,
  //   setOpenModal,
  // } = React.useContext(TodoContext);
  
  const onWrite = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }
  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onAdd}>
      <label>Add new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onWrite}
        placeholder='TODO description'
      />
      <div className="TodoForm-buttonContainer">
        <button
          type='button'
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="TodoForm-button TodoForm-button-add"
          type='submit'
        >
          Add
        </button>
      </div>
    </form>
  )
}

export { TodoForm };