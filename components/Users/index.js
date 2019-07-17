import React from 'react';
import usersQuery from '../graphql/usersQuery';
import Loading from '../Loading';
import useQuery from '../hooks/useQuery';
import User from './User';

const Users = () => {
  const response = useQuery(usersQuery, { dataType: 'users' });
console.log('response', response)
  return (response.loading ? <Loading /> : response.data.users
    .map(User)
  );
};

export default Users;
