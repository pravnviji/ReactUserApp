import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid User Input",
        message: "Please enter the valid name | age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter the valid age",
      });
      return;
    }
    console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error["title"]}
          message={error["message"]}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onInput={usernameChangeHandler}
          ></input>

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onInput={ageChangeHandler}
          ></input>

          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
