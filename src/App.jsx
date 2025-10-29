import { useState } from 'react'
import BattleScreen from './components/BattleScreen/BattleScreen'
import CardArea from './components/CardArea/CardArea'
import Card from './components/Card/Card'
import './App.css'

function App() {
  return (
    <BattleScreen
    cardArea={
      <CardArea>
        <Card/>
      </CardArea>
    }
    />
  )
}

export default App
