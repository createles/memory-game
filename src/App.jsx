import {useCallback, useState } from 'react'
import BattleScreen from './components/BattleScreen/BattleScreen'
import MainMenuScreen from './components/MainMenuScreen/MainMenu'
import './App.css'
import useRecordStorage from './components/useRecordStorage';

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu');
  const [difficulty, setDifficulty] = useState('');
  const [theme, setTheme] = useState('blackGold');

  const { records, updateRecord } = useRecordStorage();

  const startGame = useCallback(() => {
    setCurrentScreen('battle');
    console.log('game started');
  }, []);

  const handleThemeChange = useCallback(() => {
    setTheme(prevTheme =>
      prevTheme === 'blackGold' ? 'purpleChrome' : 'blackGold'
    );
    console.log('Theme changed.')
  }, [])

  const handleDifficultyChange = useCallback((newDifficulty) => {
    setDifficulty(newDifficulty);
    console.log(`Difficulty set to: ${newDifficulty}`);
  }, []);

  const returnToMenu = useCallback(() => {
    setCurrentScreen('menu');
    console.log('returning to main menu');
  }, []);

  const screens = {
    menu: (
      <MainMenuScreen
        onStartGame={startGame}
        theme={theme}
        onThemeChange={handleThemeChange}
        onDifficultyChange={handleDifficultyChange}
        records={records}
      />
    ),
    battle: (
      <BattleScreen
        difficulty={difficulty}
        onReturnToMenu={returnToMenu}
        theme={theme}
        records={records}
      />
    ),
  };

  return (
    <div className="app-container">
      {screens[currentScreen]}
    </div>
  );
}

export default App
