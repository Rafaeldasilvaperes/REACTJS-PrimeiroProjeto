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
  // useStates
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  // functions
  const pickWordAndCategory = () => {
    // picks a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    // picks a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word)

    return {word, category};
  }

  // starts the game
  const startGame = () => {
    // pick word and category function
    const {word, category} = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toUpperCase());

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);
    console.log("word", word)
    console.log("category",category)
    console.log("letters",wordLetters)

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
      {gameStage === 'game' && <Game verifyLetterProps={verifyLetter} />}
      {gameStage === 'end' && <End restartProps={restart} />}
     
    </div>
  );
}

