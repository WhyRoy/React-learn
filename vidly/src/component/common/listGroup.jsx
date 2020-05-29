import React, { Component } from "react";
class ListGroup extends Component {
  render() {
    const {
      items,
      onItemSelect,
      textProperty,
      valueProperty,
      selectedItem,
    } = this.props;
    return (
      <ul className="list-group" style={{ cursor: "pointer" }}>
        {items.map((item) => (
          <li
            className={
              selectedItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
