import styles from './End.module.css'

export const End = ({restartProps, score}) => {
  return (
    <main className={styles.main_container}>
      <h1 className={styles.main_h1}>GAME OVER!</h1>
      <h2 className={styles.main_h2}>A sua pontuação foi: <span>{score}</span></h2>
      <button className={styles.main_button} onClick={restartProps} >Tela inicial</button>
    </main>
  )
}