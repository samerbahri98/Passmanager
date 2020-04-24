import React, { Component } from "react";
import Thead from "./Thead";
import Row from "./Row";

class Table extends Component {

  toggleView = (value) => {
    this.setState({ display: value });
  };
  render() {
    return (
      <div className="panel-block table-container">
        <table className="table is-hoverable is-fullwidth">
          <Thead />
          <tbody>
            {this.props.list.map((elem,index) => (
              <Row key={index} item={elem}/>
            ))}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
