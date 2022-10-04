// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// data
import { wordsList } from './data/words.js'

// components
import { StartScreen } from './components/startScreen/StartScreen';
import { Game } from './components/gameScreen/Game'
import { End } from './components/endScreen/End'

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
  const [guessedLetters, setguessedLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);


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
    wordLetters = wordLetters.map((l) => l.toUpperCase());

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    console.log("word", word)
    console.log("category",category)
    console.log("letters", wordLetters)
    setGameStage(stages[1].name)
  }

  // process letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toUpperCase();
    // check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    // push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setguessedLetters((actualguessedLetters) => [
        ...actualguessedLetters,
        normalizedLetter
      ])
    }else{
      setwrongLetters((actualwrongLetters) => [
        ...actualwrongLetters,
        normalizedLetter
      ])
    }
  };
  console.log("Adivinhadas",guessedLetters)
  console.log("Erradas",wrongLetters)

  // return home screen
  const restart = () => {
    setGameStage(stages[0].name)
  }

  // APP return
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGameProps={startGame} />}
      {gameStage === 'game' && <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters} 
        guessedLetters={guessedLetters} 
        wrongLetters={wrongLetters} 
        guesses={guesses} 
        score={score}
      />}
      {gameStage === 'end' && <End restartProps={restart} />}
     
    </div>
  );
}

