import React, { Component } from "react";
import Cell from "./Cell";
class Matrix extends Component {
  state = {
    websites: [
      {
        _id: "5e796c08bb70982c1cb37f6e",
        WebsiteName: "google",
        WebsiteUrl: "https://google.com",
        Username: "Samer",
        Email: "samer@gmail.com",
        Phone: "0036204336216",
        img: "gSo6Heg",
        Password: "google",
        date: Date.now()
      },
      {
        _id: "5e796c08bb70982c1cb37f6e",
        WebsiteName: "twitter",
        WebsiteUrl: "https://twitter.com",
        Username: "@samer",
        Email: "samer@gmail.com",
        Phone: "0036204336216",
        img: "JUpEjIB",
        Password: "google",
        date: Date.now()
      }
    ]
  };
  render() {
    return (
      <div className="panel-block">
        <div className="matrix container is-hoverable">
          {this.state.websites.map(elem => (
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
