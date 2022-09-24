import styles from './StartScreen.module.css';

export const StartScreen = () => {
  return (
    <section className={styles.start}>  
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button>Começar o Jogo</button>
    </section>
  )
}