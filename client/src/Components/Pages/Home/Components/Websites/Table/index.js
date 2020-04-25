import React, { Component, Fragment } from "react";
import Thead from "./Thead";
import Row from "./Row";

class Table extends Component {
  state = {
    notification: false,
    text: "",
  };
  modify = () => this.props.modify();
  delete = () => this.props.delete();
  CloseNotif = () => this.setState({ notification: false, text: "" });

  notify = (text) => this.setState({ notification: true, text: text });
  render() {
    return (
      <Fragment>
        {this.state.notification ? (
          <div className="notification is-primary is-light">
            <button className="delete" onClick={this.CloseNotif}></button>
            {this.state.text}
          </div>
        ) : (
          <Fragment />
        )}
        <div className="panel-block table-container">
          <table className="table is-hoverable is-fullwidth">
            <Thead />
            <tbody>
              {this.props.list.map((elem, index) => (
                <Row
                  key={index}
                  item={elem}
                  notify={this.notify}
                  modify={this.modify}
                  delete={this.delete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default Table;
