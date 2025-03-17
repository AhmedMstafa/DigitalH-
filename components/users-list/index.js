'use client';
import User from '../user';
import { usersContext } from '@/store/users-context';
import { use } from 'react';

export default function UsersList({ isGrid = false, showAllDetails }) {
  const { users } = use(usersContext);

  return (
    <section className="mt-5 border">
      <p className="border-b py-5 mb-5 text-lg font-semibold text-center">
        All Users
      </p>
      <div
        className={`${
          isGrid
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5'
            : 'flex flex-col gap-5'
        }`}
      >
        {users.map((user) => (
          <User key={user.id} {...{ user, showAllDetails }} />
        ))}
      </div>
    </section>
  );
}
