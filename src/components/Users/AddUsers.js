import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUsers(props) {
  const [UsersName, setUsersName] = useState("");
  const [UsersAge, setUsersAge] = useState("");
  const [UsersDesignation, setUsersDesignation] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      UsersName.trim().length === 0 ||
      UsersAge.trim().length === 0 ||
      UsersDesignation.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message:
          "Please Enter a valid name ,age(non-empty values) and designation",
      });
      return;
    }
    if (+UsersAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid age(>0)",
      });
      return;
    }
    props.onAddUser(UsersName, UsersAge, UsersDesignation);
    setUsersName("");
    setUsersAge("");
    setUsersDesignation("");
  };
  const addUserNameHandler = (event) => {
    setUsersName(event.target.value);
  };
  const addUserageHandler = (event) => {
    setUsersAge(event.target.value);
  };
  const addUserDesignationHandler = (event) => {
    setUsersDesignation(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={UsersName}
            onChange={addUserNameHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={UsersAge}
            onChange={addUserageHandler}
          />
          <label htmlFor="designation">Designation</label>
          <input
            id="designation"
            type="text"
            value={UsersDesignation}
            onChange={addUserDesignationHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUsers;
