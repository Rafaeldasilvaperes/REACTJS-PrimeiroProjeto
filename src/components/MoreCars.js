import styles from './MoreCars.module.css'

export const MoreCars = ({id, brand, color, km, newCar}) => {
  return (
    <>
      <li className={styles.lista}>   
        <h4>Carro ID: <span>{id}</span></h4>
        <h4>Marca: <span>{brand}</span></h4>
        <h4>Cor: <span>{color}</span></h4>
        <h4>Quilometragem: <span>{km}</span></h4>
        <h4>Usado: <span>{newCar ? ("Novo") : ("Usado")}</span></h4>
      </li>
    </>
  )
}