import React from 'react';
import User from './User';

const Users = ({ users }) => users.map(User);

export default Users;
