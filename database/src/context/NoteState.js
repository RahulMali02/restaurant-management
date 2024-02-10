import React, { useState } from "react";
import NoteContext from "./NoteContext";

export default function NoteState(props) {
  const [users, setusers] = useState([]);
  const [orders, setorders] = useState([]);

  const fetchUsers = async () => {
    console.log("hyy");
    const response = await fetch(
      "http://localhost:8081/api/user/menu/showmenu",
      {
        method: "GET",
      }
    );

    const json = await response.json();
    console.log(json);
    setusers(json);
  };
  const myOrders = async () => {
    console.log("hyy3");
    const id = localStorage.getItem("cust_id");
    console.log(id);
    const response = await fetch(
      `http://localhost:8081/api/users/yourorders/${id}`,
      {
        method: "GET",
      }
    );

    const json = await response.json();
    console.log(json);
    setorders(json);
  };
  const delete_order = async (id) => {
    const response = await fetch(
      `http://localhost:8081/api/users/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    console.log(json);
    myOrders();
  };

  return (
    <NoteContext.Provider
      value={{ fetchUsers, users, myOrders, orders, delete_order }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
