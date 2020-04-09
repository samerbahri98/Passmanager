import React from "react";

function Thead() {
  return (
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
  );
}

export default Thead;
