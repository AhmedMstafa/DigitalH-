'use client';
import { use } from 'react';
import { displayContext, screens } from '@/store/display-context';
import UsersList from '../users-list';
import AddNewUser from './add-new-user';
import Display from './display';

export default function QuickActions() {
  const { currentScreen } = use(displayContext);
  return (
    <div>
      <Display />
      {currentScreen === screens.viewAll ? <UsersList /> : <AddNewUser />}
    </div>
  );
}
