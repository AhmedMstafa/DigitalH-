'use client';
import { use, useRef } from 'react';
import { usersContext } from '@/store/users-context';
import Input from './input';

export default function AddNewUser() {
  const { users, addNewUser } = use(usersContext);

  const form = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData(form.current);
    const newUser = {
      id: users.length + 1,
      name: formData.get('name'),
      email: formData.get('email'),
      avatar: '/images/new-user.jpg',
    };

    addNewUser(newUser);
    form.current.reset();
  }

  return (
    <section className="border py-5">
      <form ref={form} onSubmit={onSubmitHandler} className="max-w-70 mx-auto">
        <Input title="user name" name="name" />
        <Input title="email" name="email" />
        <button
          type="submit"
          className="px-5 border cursor-pointer block ms-auto"
        >
          Add
        </button>
      </form>
    </section>
  );
}
