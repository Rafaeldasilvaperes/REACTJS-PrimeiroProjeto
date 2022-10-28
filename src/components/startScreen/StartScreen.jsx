import styles from './StartScreen.module.css';

export const StartScreen = ({startGameProps}) => {
  return (
    <section className={styles.start}>  
      {console.log("PASSOU AQUI")}
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGameProps}>Começar o Jogo</button>
    </section>
  )
}