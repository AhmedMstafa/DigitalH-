import { displayContext } from '@/store/display-context';
import { use } from 'react';

export default function Button({ name, action }) {
  const { changeScreen } = use(displayContext);

  function onClickHandler() {
    changeScreen(action);
  }

  return (
    <button onClick={onClickHandler} className="px-5 border cursor-pointer">
      {name}
    </button>
  );
}
