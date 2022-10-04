import styles from './End.module.css'

export const End = ({restartProps}) => {
  return (
    <>
    <h1>GAME OVER!</h1>
    <button onClick={restartProps}>Tela inicial</button>
    </>
  )
}