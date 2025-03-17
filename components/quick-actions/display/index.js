import Button from '../../btn';
import { screens } from '@/store/display-context';
export default function Display() {
  return (
    <div className="flex justify-center gap-5 my-5">
      <Button name="view all" action={screens.viewAll} />
      <Button name="add new" action={screens.addUser} />
    </div>
  );
}
