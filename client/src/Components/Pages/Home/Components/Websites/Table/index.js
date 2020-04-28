import React, { Component, Fragment } from "react";
import Thead from "./Thead";
import Row from "./Row";
import { connect } from "react-redux";
import { fetchWebsites } from "../../../../../../Actions/websiteActions";

class Table extends Component {
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
        <div className="panel-block table-container">
          <table className="table is-hoverable is-fullwidth">
            <Thead />
            <tbody>
              {(typeof this.props.websites.websites === "undefined")?<Fragment />:this.props.websites.websites.map((elem, index) => (
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

const mapStateToProps = (state) => ({
  websites: state.websites.websites,
});

export default connect(mapStateToProps, { fetchWebsites })(Table);
