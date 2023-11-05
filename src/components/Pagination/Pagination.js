import React from 'react'

const Pagination = ({updatePageNum}) => {
  let next = () => {
    updatePageNum((page) => page + 1);
  };
  let prev = () => {
    updatePageNum((page) => page - 1);
  };
  return ( 
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prev} className="btn btn-primary">◀</button>
      <button onClicl={next} className="btn btn-primary">▶</button>
    </div>
  );
};

export default Pagination;