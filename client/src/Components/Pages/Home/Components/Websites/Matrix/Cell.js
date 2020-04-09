import React from "react";

function Cell(props) {
  const imgur = `https://i.imgur.com/${props.item.img}.png`;
  return (
    <div className="card">
      <div className="card-image logo-card">
        <figure className="image is-64x64 is-centered logo-container">
          <img src={imgur} className="is-centered" alt="Image" />
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
              <span className="panel-icon">
                <a href={props.item.WebsiteUrl} target="_blank">
                  <i className="fa fa-globe"></i>
                </a>
              </span>
            </div>
            <p className="title is-4">{props.item.WebsiteName}</p>
            <p className="subtitle is-6">{props.item.Username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cell;
