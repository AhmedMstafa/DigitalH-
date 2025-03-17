'use client';

import { usersContext } from '@/store/users-context';
import { use } from 'react';

export default function TotalUsers() {
  const { users } = use(usersContext);
  return (
    <div className="flex items-center justify-center gap-5">
      <p>total number of users :</p>
      <span>{users.length}</span>
    </div>
  );
}
