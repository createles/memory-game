import {useCallback, useState } from 'react'
import BattleScreen from './components/BattleScreen/BattleScreen'
import MainMenuScreen from './components/MainMenuScreen/MainMenu'
import './App.css'
import GameOverScreen from './components/GameOverScreen/GameOverScreen';
import CompletionScreen from './components/CompletionScreen/CompletionScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu');
  const [difficulty, setDifficulty] = useState('');
  const [theme, setTheme] = useState('blackGold');

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

  const showGameOver = useCallback(() => {
    setCurrentScreen('gameover');
    console.log("game over");
  }, []);

  const showCompletion = useCallback(() => {
    setCurrentScreen('completion');
    console.log('you made it!');
  }, []);

  const returnToMenu = useCallback(() => {
    setCurrentScreen('menu');
    console.log('returning to main menu');
  }, []);

  const screens = {
    menu: (
      <MainMenuScreen
        onStartGame={startGame}
        onThemeChange={handleThemeChange}
        onDifficultyChange={handleDifficultyChange}
      />
    ),
    battle: (
      <BattleScreen
        difficulty={difficulty}
        onReturnToMenu={returnToMenu}
        onCompletion={showCompletion}
        onGameOver={showGameOver}
        theme={theme}
      />
    ),
    gameover: (
      <GameOverScreen
      />
    ),
    completion: (
      <CompletionScreen
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
