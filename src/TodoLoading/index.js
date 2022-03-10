import React from 'react';
import ContentLoader from "react-content-loader";
import './TodoLoading.css';

function TodoLoading() {
  return (
    <div className='TodoLoading'>
      <ContentLoader 
        speed={1}
        viewBox="0 0 400 160"
        backgroundColor="#9a9a9b"
        foregroundColor="#f3f3f5"
        style={{ width: '100%', height: 'auto' }}
      >
        <rect x="0" y="0" rx="4" ry="4" width="100%" height="30px" />
      </ContentLoader>
    </div>
  )
}

export { TodoLoading };