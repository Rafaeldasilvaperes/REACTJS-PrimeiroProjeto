import styles from './Game.module.css'
import { useState, useRef } from 'react';

export const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {

const [letter, setLetter] = useState("");
const letterInputRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();
  verifyLetter(letter);

  setLetter("");

  letterInputRef.current.focus();
}

  return (
    <section className={styles.game}>
      <p className={styles.points}>
        Pontuação: {score}
      </p>

      <h1>Advinhe a palavra:</h1>
      <h3 className={styles.tip}>
        Dica sobre a palavra:
        <span> {pickedCategory} </span>
      </h3>

      <p>Você ainda tem {guesses} tentativa(s)!</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className={styles.letter}>
            {letter}
            </span>
            ) : (
            <span key={i} className={styles.blankSquare}></span>
          )
        ))}
      </div>
      
      <div className={styles.letterContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="letter">Tente advinhar uma letra da palavra:</label>
          <input 
          type="text" 
          name="letter" 
          id="letter" 
          maxLength="1" 
          required 
          
          onChange={(e) => setLetter(e.target.value)}
          value={letter}
          ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>

      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}</span>
        ) )}
      </div>
    </section>
  )
}