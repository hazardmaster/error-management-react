import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const addNewUser = (userData) => {
    const { username, age } = userData;
    setUsersList((prevState) => {
      return [
        {
          id: Math.random().toString(),
          username,
          age,
        },
        ...prevState,
      ];
    });
  };

  return (
    <div>
      <AddUser handleAddNewUser={addNewUser} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
