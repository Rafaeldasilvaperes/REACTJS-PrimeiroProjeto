// IMAGENS
// import CityImg from "./assets/city.jpg";

// Componentes
// import { ManageData } from "./components/ManageData";
// import { ListaRender } from "./components/ListaRender";
// import { ConditionalRender } from "./components/ConditionalRender";
// import {ShowUserName} from "./components/ShowUserName";
import { CarDetails } from "./components/CarDetails";

// Styles - CSS (global)
import './App.css';
// import { useState } from "react";



export function App() {
  // const name = "Joaquim de forma Dinâmica";
  // const [userName] = useState("Maria com useState");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "VW", color: "Preto", newCar: false, km: 5000},
    {id: 3, brand: "Ford", color: "Prata", newCar: false, km: 3540},
    {id: 4, brand: "Crysler", color: "Preta", newCar: true, km: 0}
  ];

  return (
    <div className="App">
     <h1>Avançando em React</h1>
     {/* Imagem em Public */}
     <div>
      {/* <img src="/nature-react-hero.jpg" alt="Landscape" /> */}
     </div>
     {/* Imagem em Assets */}
     <div>
        {/* <img src={CityImg} alt="Cidade" /> */}
     </div>
     {/* <ManageData />
     <ListaRender /> */}
     {/* <ConditionalRender /> */}
     {/* props */}
     {/* <ShowUserName nome="Rafael direto no comp." />
     <ShowUserName nome={name} />
     <ShowUserName nome={userName} /> */}
     {/* destructuring */}
     {/* <CarDetails brand="VW" km={10000} color="Red"/> */}
     {/* reaproveitando */}
     {/* <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
     <CarDetails brand="Fiat" color="Azul" km={3000} newCar={false} /> */}
     {/* loop */}
     {cars.map((car)=>(
      <CarDetails 
        id={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}
       /> 
     ))}
     
    </div>
  );
}

