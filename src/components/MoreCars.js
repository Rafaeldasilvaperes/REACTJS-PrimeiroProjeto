import styles from './MoreCars.module.css'

export const MoreCars = ({id, brand, color, km, newCar}) => {
  return (
    <>
      <li className={styles.lista}>   
        <h2>Carro ID: <span>{id}</span></h2>
        <h3>Marca: <span>{brand}</span></h3>
        <h3>Cor: <span>{color}</span></h3>
        <h3>Quilometragem: <span>{km}</span>km</h3>
        <h3>Usado: <span>{newCar ? ("Novo") : ("Usado")}</span></h3>
      </li>
    </>
  )
}