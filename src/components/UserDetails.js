
export const UserDetails = ({id, name, age, occupation}) => {
  
  return (
    <>
      {age >= 18 ? (
      <ul>
          <li>Usuário {id}</li>
          <li>Nome: {name}</li>
          <li>Idade: {age}</li>
          <li>Ocupação: {occupation}</li>
          <br/>
        </ul>) : (<></>)}
    </>
  )
}
