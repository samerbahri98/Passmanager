import React from "react";
//import googlelogo from "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"


const Website = () => {
  return (
    <div className="column">
      <nav className="panel">
        <p className="panel-heading">All items</p>

        <div className="panel-block">
          <p className="control navbar-item">
            <span>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Sort by</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">Name (A-Z)</a>
                  <a className="navbar-item">Name (Z-A)</a>
                  <a className="navbar-item">Date (Oldest)</a>
                  <a className="navbar-item">Date (Newest)</a>
                </div>
              </div>
            </span>
          </p>
          <span className="navbar-item">
            <div className="button is-primary">
              <span className="icon">
                <i className="fa fa-list"></i>
              </span>
            </div>
            <div className="button">
              <span className="icon">
                <i className="fa fa-th"></i>
              </span>
            </div>
          </span>
        </div>
        <div className="panel-block">
          <p className="control has-icon">
            <input
              className="input is-small"
              type="text"
              placeholder="Search"
            />
          </p>
        </div>
        <div className="panel-block">
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <abbr title="Position">Logo</abbr>
                </th>
                <th>Name</th>
                <th>
                  <abbr title="Played">username/email</abbr>
                </th>
                <th>
                  <abbr title="Won"></abbr>
                </th>
                <th>
                  <abbr title="Drawn"></abbr>
                </th>
                <th>
                  <abbr title="Lost"></abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <div className="logo">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                  </div>
                </th>
                <td> Google</td>
                <td>samer.bahri@ieee.org</td>
                <td></td>
                <td></td>
                <td>
                  <span className="panel-icon">
                    <i className="fa fa-copy"></i>
                  </span>
                  <span className="panel-icon">
                    <i className="fa fa-edit"></i>
                  </span>
                  <span className="panel-icon">
                    <i className="fa fa-times"></i>
                  </span>
                </td>
              </tr>

              <tr>
                <th>
                  <div className="logo">
                    <img src="./placeholder logo2.png" alt="" />
                  </div>
                </th>
                <td>Twitter</td>
                <td>samer.bahri@ieee.org</td>
                <td></td>
                <td></td>
                <td>
                  <span className="panel-icon">
                    <i className="fa fa-copy"></i>
                  </span>
                  <span className="panel-icon">
                    <i className="fa fa-edit"></i>
                  </span>
                  <span className="panel-icon">
                    <i className="fa fa-times"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="panel-block">
          <div className="matrix container is-hoverable">
            <div className="card">
              <div className="card-image logo-card">
                <figure className="image is-64x64 is-centered logo-container">
                  <img
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    className="is-centered"
                    alt="Image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <div className="options">
                      <span className="panel-icon">
                        <i className="fa fa-copy"></i>
                      </span>
                      <span className="panel-icon">
                        <i className="fa fa-edit"></i>
                      </span>
                      <span className="panel-icon">
                        <i className="fa fa-times"></i>
                      </span>
                    </div>
                    <p className="title is-4">Google</p>
                    <p className="subtitle is-6">samer.bahri@ieee.org</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-image logo-card">
                <figure className="image is-64x64 is-centered logo-container">
                  <img
                    src="./placeholder logo2.png"
                    className="is-centered"
                    alt="Image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <div className="options">
                      <span className="panel-icon">
                        <i className="fa fa-copy"></i>
                      </span>
                      <span className="panel-icon">
                        <i className="fa fa-edit"></i>
                      </span>
                      <span className="panel-icon">
                        <i className="fa fa-times"></i>
                      </span>
                    </div>
                    <p className="title is-4">Twitter</p>
                    <p className="subtitle is-6">@samer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Website;
