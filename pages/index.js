import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('onClick');
};

const Home = () => (
  <div>
    <h1>Welcome to my XX home</h1>
    <Button variant="contained" color="primary" onClick={handleClick}>
        Default
    </Button>
  </div>
);

export default Home;
