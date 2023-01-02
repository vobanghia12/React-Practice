import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {

  return (
    <Card className = {classes.user}>
      <ul>
        {props.users.map((user, index) => (
          <li key = {user.key} onClick ={() => props.onDelete(index)}>
            {user.name} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
