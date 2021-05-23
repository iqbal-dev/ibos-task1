import React from "react";

const TableRow = ({ data, handleClick }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>
        {" "}
        <button onClick={(e) => handleClick(data)}> delete</button>{" "}
      </td>
    </tr>
  );
};

export default TableRow;
