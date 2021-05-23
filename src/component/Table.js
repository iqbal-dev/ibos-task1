import React from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../action/action";
import TableRow from "./TableRow";

const Table = ({ store }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(deleteData(e.email));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {store.map((store) => (
          <TableRow data={store} key={store.email} handleClick={handleClick} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
