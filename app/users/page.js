import AddNewUser from '@/components/quick-actions/add-new-user';
import UsersList from '@/components/users-list';
export default function Users() {
  return (
      <main>
        <AddNewUser />
        <UsersList showAllDetails={true} isGrid={true} />
      </main>
  );
}
