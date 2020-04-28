import React, { Component, Fragment } from "react";
import Cell from "./Cell";
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import { fetchWebsites } from "../../../../../../Actions/websiteActions";

class Matrix extends Component {
  state = {
    notification: false,
    text: "",
  };
  modify = () => this.props.modify();
  delete = () => this.props.delete();
  CloseNotif = () => this.setState({ notification: false, text: "" });
  notify = (text) => this.setState({ notification: true, text: text });

  componentDidMount() {
    this.refresh()
  }

  refresh = () => {
    this.props.fetchWebsites();
  };

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
          {(typeof this.props.list === "undefined")?<Fragment />:this.props.list.map((elem, index) => (
              <Cell
                key={index}
                elem={elem}
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

Matrix.propTypes = {
  fetchWebsites : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  list: state.websites.websitesList,
});

export default connect(mapStateToProps, { fetchWebsites })(Matrix);


