import React, { Component } from "react";
import Cell from "./Cell";
class Matrix extends Component {
  render() {
    return (
      <div className="panel-block">
        <div className="matrix container is-hoverable">
          {this.props.list.map(elem => (
            <Cell
              key={elem._id}
              item={elem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Matrix;
