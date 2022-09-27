import styles from './Game.module.css'

export const Game = ({verifyLetterProps}) => {
  return (
    <>
      <button onClick={verifyLetterProps}>Perder</button>
    </>
  )
}