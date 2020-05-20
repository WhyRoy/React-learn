import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  render() {
    const { itemsCount, pageSize, onPageChange, currentPage } = this.props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    // console.log(currentPage);
    if (pageCount === 1) return null;
    //用lodash生成一个数组，从1-pageCount
    // 先安装lodash
    const pages = _.range(1, pageCount + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
              style={{ cursor: "pointer" }}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
