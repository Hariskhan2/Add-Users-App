import UsersList from "./components/Users/UsersList";
import React, { useState} from "react"
import './App.css';
import AddUsers from './components/Users/AddUsers';

function App() {
  const [usersList,setUsersList]= useState([])
  const addUserHandler=(uName,uAge,uDes)=>{
setUsersList(
  (previousList)=>{
    return([...previousList,{name:uName,age:uAge,designation:uDes,id:Math.random().toString()}])
  }
);
  }

  return (
    <div className="App">
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
