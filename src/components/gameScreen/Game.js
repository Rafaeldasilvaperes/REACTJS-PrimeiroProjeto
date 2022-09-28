import styles from './Game.module.css'

export const Game = ({verifyLetterProps}) => {
  return (
    <section className={styles.game}>
      <p className={styles.points}>
        Pontuação: <span>000</span>
      </p>

      <h1>Advinhe a palavra:</h1>

      <h3 className={styles.tip}>
        Dica sobre a palavra:
        <span> Dica...</span>
      </h3>

      <div className={styles.wordContainer}>
        <span className={styles.letter}>A</span>
        <span className={styles.blankSquare}></span>
        
      </div>
      

      <div className={styles.letterContainer}>
        <form>
          <label htmlFor="letter">Tente advinhar uma letra da palavra:</label>
          <input type="text" name="letter" id="letter" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>

      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        <span>a</span>
        <span>b</span>
        <span>b</span>
        <span>b</span>
        <span>b</span>
      </div>
    </section>
  )
}