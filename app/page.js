import QuickActions from '@/components/quick-actions';
import TotalUsers from '@/components/total-users/index';
import DisplayContext from '@/store/display-context';

export default function Home() {
  return (
    <main>
      <TotalUsers />
      <DisplayContext>
        <QuickActions />
      </DisplayContext>
    </main>
  );
}
