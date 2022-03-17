import React from 'react';
import { useLocalStorage } from './useLocalStorage';


function useTodos() {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
    sync: syncTodos,
  } = useLocalStorage('TODOS_V1', []);

  const [openModal, setOpenModal] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false,
    });
    saveTodos(newTodos);
  }

  return (
    {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal,
      syncTodos,
    }
  )
}

export { useTodos };
