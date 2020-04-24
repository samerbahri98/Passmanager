import React from "react";

const Row = (props) => {
  const imgur = `https://i.imgur.com/${props.item.imgurid}.png`;
  return (
    <tr>
      <th>
        <div className="logo">
          <img src={imgur} alt="" />
        </div>
      </th>
      <td> {props.item.WebsiteName}</td>
      <td>{props.item.Username}</td>
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
          <a href={props.item.WebsiteUrl} target="_blank">
            <i className="fa fa-globe"></i>
          </a>
        </span>
      </td>
    </tr>
  );
};

export default Row;
