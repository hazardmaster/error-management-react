import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.handleAddNewUser({ username, age });
    setUsername('');
    setAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={age}
            onChange={handleAgeChange}
          />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
