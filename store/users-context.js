'use client';
import { createContext, useState } from 'react';
import dummyData from '@/data.json';

export const usersContext = createContext({
  users: [],
  addNewUser: () => {},
});

export default function UsersContext({ children }) {
  const [users, setUsers] = useState(dummyData);

  function addNewUser(newUser) {
    setUsers((prev) => [...prev, newUser]);
  }

  const usersCtx = {
    users,
    addNewUser,
  };

  return (
    <usersContext.Provider value={usersCtx}>{children}</usersContext.Provider>
  );
}
