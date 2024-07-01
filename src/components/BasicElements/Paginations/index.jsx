import React from 'react';

import { Pagination } from 'components/common/Pagination/index.jsx';

export const Paginations = () => (
  <div className="col-6">
    <h3 className="title-3 section-title">Pagination</h3>

    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">5</a></li>
        <li className="page-item"><a className="page-link active" href="#">6</a></li>
        <li className="page-item"><a className="page-link" href="#">7</a></li>
        <li className="page-item"><a className="page-link" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">12</a></li>
      </ul>
    </nav>

    <Pagination/>
  </div>
);
