import React from 'react';
import './NoResultTodos.css';

function NoResultTodos({searchText}) {
  return (
    <div className='NoResultTodos'>
        No results for {searchText}
    </div>
  )
}

export { NoResultTodos };