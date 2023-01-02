import React, { useState } from "react";
import Card from "../Card";
import classes from "./AddUser.module.css";
import Button from "../Button";
import ErrorModal from "../ErrorModal";
const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUsersHandler = (event) => {
    event.preventDefault();
    if (!username.trim() || !age.trim())
        setError({
            title: 'Invalid Input',
            message: 'Please enter a valid name and age (non-empty) values).'
        })
    if (+age < 1)
        setError({
            title: 'Invalid Age',
            message: 'Please enter valid age!',
        })
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const setName = (event) => {
    setUsername(event.target.value);
  };

  const setAging = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () =>{
    setError(null)
  }
  return (
    <>
    {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUsersHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          onChange={setName}
          value={username}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          placeholder="Enter your age"
          onChange={setAging}
          value={age}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
