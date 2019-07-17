import React from 'react';
import UsersComponent from '../components/Users';
import usersQuery from '../components/graphql/usersQuery';
import { runQuery } from '../components/hooks/useQuery';

// eslint-disable-next-line react/prop-types
const Users = ({ users }) => (
  <UsersComponent users={users} />
);

Users.getInitialProps = async () => {
  const response = await runQuery(usersQuery);

  return response.data;
};

export default Users;
