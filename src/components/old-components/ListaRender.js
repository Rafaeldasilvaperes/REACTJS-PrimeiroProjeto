import {useState} from 'react'

export const ListaRender = () => {
  const [list] = useState(["Rafael", "Renato", "Rodrigo", "Carmerinda", "Silvio", "Anna"]);

  // if it would have IDs
  const [users, setUsers] = useState([
    {id: 1, name: "Rafael", age: 30},
    {id: 2, name: "Rodrigo", age: 32},
    {id: 3, name: "Renato", age: 29}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter((user) => randomNumber !== user.id);
    })
  }

  return (
    <>
    <ul>
      {list.map((item, i) =>(
        <li key={i}>{item}</li>
      ))}
    </ul>
    <hr />
    <ul>
    {users.map((user) =>(
      <li key={user.id}>{user.name} - {user.age}</li>
    ))}

    <button onClick={deleteRandom}>Deletar Random User</button>
  </ul>
  <hr />
  </>
  )
}
