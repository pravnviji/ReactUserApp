import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uname, uage) => {
    setUserList((previousUserList) => {
      return [
        ...previousUserList,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      {userList.length > 0 && <UserList users={userList}></UserList>}
    </div>
  );
}

export default App;
