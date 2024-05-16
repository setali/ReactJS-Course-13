import React, { useEffect, useState } from "react";
import Table from "./Table";

const columns = [
  { title: "ID", dataIndex: "id" },
  {
    title: "Name",
    dataIndex: "name",
    render: (el) => <a href="#">{el}</a>,
  },
  {
    title: "Address",
    dataIndex: "address",
    render: (el, r) => {
      return `${el.city} - ${el.suite} - ${r.phone}`;
    },
  },
];

const commentColumns = [
  { title: "ID", dataIndex: "id" },
  { title: "Name", dataIndex: "name" },
];

export default function App() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers);
    // .then((data) => setUsers(data));

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then(setComments);
  }, []);

  return (
    <>
      <Table
        data={users}
        columns={columns}
        rowKey={"id"}
        // rowKey={(r) => `${r.name}${r.email}`}
      />

      <Table data={comments} columns={commentColumns} rowKey={"id"} />
    </>
  );
}
