import React from "react";
import Button from "./Button";
import classes from "./ErrorModule.module.css";
import Card from "./Card";
const ErrorModal = (props) => {
  return (
    <div className = {classes.backdrop}>
    <Card className={classes.modal}>
      <header className= {classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className= {classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className= {classes.action}>
        <Button onClick = {props.onConfirm}>Okay</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
