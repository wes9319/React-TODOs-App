import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const renderFunct = props.children || props.render;
  return (
    <section className='TodoListContainer'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {props.searchedTodos.map((todo) => renderFunct(todo))}
    </section>
  )
}

export { TodoList };