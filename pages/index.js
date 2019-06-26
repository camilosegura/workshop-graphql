import React from 'react';
import Button from '@material-ui/core/Button';
import { gql } from 'apollo-boost';
import client from '../apollo/client';

const handleClick = () => {
  console.log('onClick');

  client
    .query({
      query: gql`
      {
        users {
            id
            name
            email
        }
      }
    `,
    })
    .then(result => console.log(result));
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
