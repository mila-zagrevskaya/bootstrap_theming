import React from 'react';

export const Pagination = () => (
  <nav aria-label="Page navigation">
    <ul className="pagination">
      <li className="page-item"><a className="page-link" href="#">Prev</a></li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link active" href="#">3</a></li>
      <li className="page-item"><a className="page-link" href="#">4</a></li>
      <li className="page-item"><a className="page-link" href="#">5</a></li>
      <li className="page-item"><a className="page-link" href="#">Next</a></li>
    </ul>
  </nav>
);
