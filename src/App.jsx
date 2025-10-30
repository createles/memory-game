import { useState } from 'react'
import BattleScreen from './components/BattleScreen/BattleScreen'
import MainMenuScreen from './components/MainMenuScreen/MainMenu'
import './App.css'
import GameOverScreen from './components/GameOverScreen/GameOverScreen';
import CompletionScreen from './components/CompletionScreen/CompletionScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu');
  const [difficulty, setDifficulty] = useState('');

  const startGame = () => {
    setCurrentScreen('battle');
    console.log('game started');
  };

  const showGameOver = () => {
    setCurrentScreen('gameover');
    console.log("game over");
  }

  const showCompletion = () => {
    setCurrentScreen('completion');
    console.log('you made it!');
  }

  const returnToMenu = () => {
    setCurrentScreen('menu');
    console.log('returning to main menu');
  }

  const screens = {
    menu: (
      <MainMenuScreen
        onStartGame={startGame}
        setDifficulty={setDifficulty}
      />
    ),
    battle: (
      <BattleScreen
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
