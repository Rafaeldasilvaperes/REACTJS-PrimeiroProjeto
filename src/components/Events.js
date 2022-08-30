export const Events = () => {

  const handleMyEvent = (e) =>{
    console.log("Fui clicado!", e)
  }

  const renderSomething = (x) =>{
    if (x) {
      return <h1>Renderizando IF TRUE</h1>
    } else {
      return <h1>Renderizando ELSE</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("CLICKOU INLINE")}>Clique Aqui Também!</button>
      </div>
      <div>
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    </div>
  )
};