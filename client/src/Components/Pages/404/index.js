import React from "react";
import img from "./undraw_page_not_found_su7k.svg";

const Notfound = () => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src={img}
            alt="Image"
            
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="container">
          <center>
            <h2 className="subtitle">Whooooops! Nothing to see here</h2>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
