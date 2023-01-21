import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';
function App() {
  const [usersList, setUsersList] = useState([]);
  function addUserList(uName,uAge){
    setUsersList(prevUserList=>{
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]
    });
  }
  return (
  <div>
  <AddUser onAddUser={addUserList}/>
  <UsersList users={usersList}/>
  </div>
  );
}

export default App;
