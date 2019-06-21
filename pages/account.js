import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('onClick');
};

const Account = () => (
  <div>
    <h1>Welcome to my Account</h1>
    <Button variant="contained" onClick={handleClick}>
        Post
    </Button>
  </div>
);

export default Account;
