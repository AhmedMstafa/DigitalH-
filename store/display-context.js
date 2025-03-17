'use client';
import { createContext, useState } from 'react';
export const screens = { viewAll: 'VIEW ALL', addUser: 'ADD USER' };

export const displayContext = createContext({
  currentScreen: screens.viewAll,
  changeScreen: () => {},
});

export default function DisplayContext({ children }) {
  const [currentScreen, setScreen] = useState(screens.viewAll);

  function changeScreen(screen) {
    setScreen(screen);
  }

  const displayCtx = {
    currentScreen,
    changeScreen,
  };

  return (
    <displayContext.Provider value={displayCtx}>
      {children}
    </displayContext.Provider>
  );
}
