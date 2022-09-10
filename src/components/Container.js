
export const Container = ({children, myValue}) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      <p>O valor é {myValue}</p>
      {children}
    </div>
  )
}
