import React, {useState} from 'react';
import AddUser from './component/UI/Users/AddUser';
import UserList from './component/UserList/UserList';

function App() {
  const [userList, setUserList]= useState([]);
  const addUsersToUserListHandler = (userName, age) => {
    setUserList((prevUserList) => [...prevUserList, {key: Math.random().toString(), name: userName, age: age}])
  }

  const deleteUserHandler = (index) => {
    setUserList((prevUserList) => {
        prevUserList.splice(index);
        return prevUserList;
    })
  }
  return (
    <div>
      <AddUser onAddUser = {addUsersToUserListHandler}/>
      {userList.length > 0 &&<UserList users ={userList} onDelete = {deleteUserHandler}/>}
    </div>
  );
}

export default App;
