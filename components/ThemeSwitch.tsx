'use client';

import { useTheme } from "next-themes";

const ThemeSwitch = () => {

    const { theme, setTheme } = useTheme();

  return (
    <main>
      <button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')} 
        className="p-2 border">{theme === 'dark' ? 'Light' : 'Dark'}</button>
    </main>
  );
};

export default ThemeSwitch;
