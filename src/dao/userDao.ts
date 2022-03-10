import User from '../models/user';

export const getUsers = () => {
  // Fetch users from database or some API
  const users = [
    new User(1, 'Dummy 1', 'dummy1@email.com'),
    new User(2, 'Dummy 2', 'dummy2@email.com'),
    new User(3, 'Dummy 3', 'dummy3@email.com')
  ];
  return users;
};
