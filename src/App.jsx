import { useState } from 'react'
import BattleScreen from './components/BattleScreen/BattleScreen'
import CardArea from './components/CardArea/CardArea'
import './App.css'

function App() {
  return (
    <BattleScreen
    cardArea={<CardArea/>}
    />
  )
}

export default App
