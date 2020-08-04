import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
class TableBody extends Component {
  renderCell = (item, column, user) => {
    if (column.content) return column.content(item);
    if (column.path === "title" && user)
      return <Link to={`/movies/${item._id}`}>{_.get(item, column.path)}</Link>;
    else return _.get(item, column.path);
  };
  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns, user } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column, user)}
                {/* {_.get(item, column.content, column.path)} */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
