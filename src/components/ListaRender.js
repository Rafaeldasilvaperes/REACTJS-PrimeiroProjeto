import {useState} from 'react'

export const ListaRender = () => {
  const [list] = useState(["Rafael", "Renato", "Rodrigo", "Carmerinda", "Silvio", "Anna"]);

  // if it would have IDs
  const [users] = useState([
    {id: 1, name: "Rafael", age: 30},
    {id: 11231, name: "Rodrigo", age: 32},
    {id: 134523, name: "Renato", age: 29}
  ])

  return (
    <>
    <ul>
      {list.map((item, i) =>(
        <li key={i}>{item}</li>
      ))}
    </ul>
    <ul>
    {users.map((user) =>(
      <li key={user.id}>{user.name} - {user.age}</li>
    ))}
  </ul>
  </>
  )
}
