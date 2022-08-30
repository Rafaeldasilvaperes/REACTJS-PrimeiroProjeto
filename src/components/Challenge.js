export const Challenge = () =>{

  const a = 2;
  const b = 3;
  const handleSumTwoValues = () => {
    console.log(a + b)
  }

  return (
    <>
      <h1>a: {a} + b: {b} -- Clique no botão para saber a soma dos dois!</h1>
      <button onClick={handleSumTwoValues}>Clique para somar!</button>
      
    </>
  )
};