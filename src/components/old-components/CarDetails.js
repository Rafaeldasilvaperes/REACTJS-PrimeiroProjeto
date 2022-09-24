export const CarDetails = ({brand, km, color, newCar, id }) => {

  return (
    <div>
      <h2>Detalhes do Carro {id}:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}


// sem destructuring, props clássico antigo
// export const CarDetails = (props) => {

//   return (
//     <div>
//       <h2>Detalhes do Carro:</h2>
//       <ul>
//         <li>Marca: {props.brand}</li>
//         <li>KM: {props.km}</li>
//         <li>Cor: {props.color}</li>
//       </ul>
//     </div>
//   )
// }
