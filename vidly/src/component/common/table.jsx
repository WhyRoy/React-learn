import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

class Table extends Component {
  render() {
    const { columns, onSort, sortColumn, data } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody data={data} columns={columns} />
      </table>
    );
  }
}

export default Table;
