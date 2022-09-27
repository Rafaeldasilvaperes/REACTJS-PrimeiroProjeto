// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// data
import { wordsList } from './data/words.js'

// components
import { StartScreen } from './components/startScreen/StartScreen.js';
import { Game } from './components/gameScreen/Game.js'
import { End } from './components/endScreen/End.js'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

export function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // starts the game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  // process letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // return home screen
  const restart = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGameProps={startGame} />}
      {gameStage === 'game' && <Game verifyLetterProps={verifyLetter}/>}
      {gameStage === 'end' && <End restartProps={restart}/>}
      
     
    </div>
  );
}

