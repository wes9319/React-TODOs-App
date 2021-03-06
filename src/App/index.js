import React from 'react'; 
import { useTodos } from './useTodos';
import { TodoWelcome } from "../TodoWelcome";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos';
import { NoResultTodos } from '../NoResultTodos';
import { TodoHeader } from '../TodoHeader';
import { ChangeAlert } from '../ChangeAlert';


function App() {

  const { 
    state,
    stateUpdaters
  } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
  } = state;

  const {
    setOpenModal,
    completeTodo,
    addTodo,
    deleteTodo,
    setSearchValue,
    syncTodos,
  } = stateUpdaters;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoWelcome/>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodoError/>}
        onLoading={() => <TodoLoading/>}
        onEmptyTodos={() => <EmptyTodos/>}
        onEmptySearchResults={
          (searchText) => <NoResultTodos searchText={searchText}/>
        }
      >
        {todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
        syncTodos={syncTodos}
      />
    </>
  );
}

export default App;
