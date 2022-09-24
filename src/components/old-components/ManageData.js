import {useState} from 'react';


export const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(15);

  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mudar Variável</button>
      <hr />
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(number + 25)}>Mudar Variável</button>

    </div>
  )
}

