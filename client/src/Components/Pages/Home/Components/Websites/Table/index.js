import React, { Component } from "react";
import Thead from "./Thead";
import Row from "./Row";

class Table extends Component {
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
        WebsiteUrl: "https://google.com",
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
      <div className="panel-block table-container">
        <table className="table is-hoverable is-fullwidth">
          <Thead />
          <tbody>
            <Row />
            {this.state.websites.map(elem => (
            <Row
              key={elem._id}
              img={elem.img}
              Uname={elem.Username}
            />
          ))}
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
    );
  }
}

export default Table;
