import React, { Component } from "react";

class Modify extends Component {

  cancel = () => this.props.cancel()

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.cancel}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title" style={{textAlign: "left"}}>Modify Website</p>
            <button className="delete" aria-label="close" onClick={this.cancel}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label" style={{textAlign: "left"}}>URL</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="www.acme.com"
                />
              </p>
            </div>
            <div className="field">
              <label className="label" style={{textAlign: "left"}}>Website Name</label>
              <p className="control">
                <input className="input" type="text" placeholder="acme" />
              </p>
            </div>

            <div className="field">
              <label className="label" style={{textAlign: "left"}}>Username</label>
              <p className="control has-icon has-icon-right">
                <input className="input" type="text" placeholder="JohnDoe02" />
              </p>
            </div>

            <div className="field">
              <label className="label" style={{textAlign: "left"}}>Email</label>
              <p className="control has-icon has-icon-right">
                <input
                  className="input"
                  type="text"
                  placeholder="johndoe@gmail.com"
                />
              </p>
            </div>

            <div className="field">
              <label className="label"  style={{textAlign: "left"}}>Password</label>
              <p className="control has-icon has-icon-right">
                <input
                  className="input"
                  type="text"
                  placeholder="UR#S^yZaW3&aA"
                />
              </p>
            </div>

            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  Generate randomly
                </label>
              </p>
            </div>

            <label className="label"  style={{textAlign: "left"}}>Password length</label>
            <div className="field has-addons">
              <p className="control">
                <input
                  className="slider is-fullwidth"
                  step="1"
                  min="0"
                  max="100"
                  value="50"
                  type="range"
                />
              </p>
              <label className="control">
                <p className="is-info">
                  <input
                    type="number"
                    className="input num"
                    value="50"
                    style={{ width: "6em" }}
                  />
                </p>
              </label>
            </div>

            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  A-Z
                </label>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  a-z
                </label>
              </p>
            </div>

            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  0-9
                </label>
              </p>
            </div>

            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  {`!@#$%^&*_+~>?<`}
                </label>
              </p>
            </div>

            <div className="field">
              <label className="label"  style={{textAlign: "left"}}>Notes</label>
              <p className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
              </p>
            </div>
            <div className="field">
              <label className="label"  style={{textAlign: "left"}}>Website Logo</label>
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  Upload
                </label>
              </p>
              <p className="control">
                <div className="file has-name is-boxed">
                  <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fa fa-upload"></i>
                      </span>
                      <span className="file-label">Choose a file…</span>
                    </span>
                    <span className="file-name">
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>
              </p>
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  Link
                </label>
              </p>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="acme.com/logo.ong"
                />
              </p>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save</button>
            <button className="button" onClick={this.cancel}>Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Modify;
