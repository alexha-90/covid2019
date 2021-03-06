import React from "react";
import Pagination from "react-bootstrap/Pagination";

import "./style.scss";
//============================================================================//

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const PaginationComponent = () => {
  return (
    <div className="pagination-container">
      <Pagination
        style={{ float: "right" }}
      >
        {items}
        </Pagination>
    </div>
  )
};

export default PaginationComponent;
