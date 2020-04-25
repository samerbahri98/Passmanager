import React, { Component, Fragment } from "react";
import Cell from "./Cell";
class Matrix extends Component {
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

        <div className="panel-block">
          <div className="matrix container is-hoverable">
            {this.props.list.map((elem) => (
              <Cell
                key={elem._id}
                item={elem}
                notify={this.notify}
                modify={this.modify}
                delete={this.delete}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Matrix;
