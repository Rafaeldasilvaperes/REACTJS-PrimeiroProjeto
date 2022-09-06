import { useState } from "react";

export const ConditionalRender = () => {
  const[x] = useState(true);

  const [name, setName] = useState("João")

  return (
    <>
      <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for TRUE, sim!</p>}
        {!x && <p>Agora x é FALSE</p>}
      </div>
      <div>
        <h1>Isso será exibido?</h1>
        <h3>- IF ternário:</h3>
        {x ? (<p>Se x for TRUE, sim!</p>) : (<p>Agora x é FALSE</p>)}
        {name === "João" ? (
          <div>
            <p>O nome é {name}</p>
          </div>
        ) : (
          <div>
            <p>O nome não foi encontrado!</p>
          </div>
        )}
        <button onClick={() => setName("Rafael")}>Mude para outro nome</button>
      </div>
    </>
  )
}
