import React from "react";

function Row(props) {
  const imgur = `https://i.imgur.com/${props.img}.png`
  return (
    <tr>
      <th>
        <div className="logo">
          <img
            src={imgur}
            alt=""
          />
        </div>
      </th>
  <td> {props.Uname}</td>
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
        <span className="panel-icon">
            <i className="fa fa-globe"></i>
        </span>
      </td>
    </tr>
  );
}

export default Row;
