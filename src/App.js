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

  const GUESSES_QANTITY = 5;
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setguessedLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(GUESSES_QANTITY);
  const [score, setScore] = useState(0);


  // functions
  const pickWordAndCategory = useCallback(() => {
    // picks a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // picks a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  }, [words]);

  // starts the game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();

    // pick word and category function
    const {word, category} = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toUpperCase());

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name)
    console.log(wordLetters)
  }, [pickWordAndCategory]);

  
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

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  };

  const clearLetterStates = () => {
    setguessedLetters([]);
    setwrongLetters([]);
  }

  // check if guesses ended
  useEffect(() => {
    if(guesses <= 0){
      // reset all states
      clearLetterStates();
      setGameStage(stages[2].name)
    }
  }, [guesses])

  // checks win condition
  useEffect(() =>{
    // brings an array with unique letters from the const letters
    const uniqueLetters = [...new Set(letters)];
    // win condition
    if(guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name){
      // add score
      setScore((actualScore) => actualScore += 100)

      // restart game with a new word
      setTimeout(function () {
        startGame();
      }, 1000);
    }
  }, [guessedLetters, letters, startGame, gameStage])

  // return home screen
  const restart = () => {
    setScore(0);
    setGuesses(GUESSES_QANTITY);
    setGameStage(stages[0].name)
  }
  // ===============================================================
  // APP return
  // ===============================================================

  return (
    <div className="App">
      {console.log("Game Stage",gameStage)}
      {gameStage === "start" && <StartScreen startGameProps={startGame} />}
      {gameStage === "game" && <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters} 
        guessedLetters={guessedLetters} 
        wrongLetters={wrongLetters} 
        guesses={guesses} 
        score={score}
      />}
      {gameStage === "end" && <End restartProps={restart} score={score}/>}
     
    </div>
  );
}

