import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useDarkMode } from './hooks';


function App() {

  const darkMode = useDarkMode();

  return (
    <div className={darkMode.getCurrentStatus() ? "dark" : "light"}>
      <button onClick={darkMode.changeCurrentStatus}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
