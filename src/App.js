// IMAGENS
// import CityImg from "./assets/city.jpg";

// Componentes
// import { ManageData } from "./components/ManageData";
// import { ListaRender } from "./components/ListaRender";
// import { ConditionalRender } from "./components/ConditionalRender";
// import {ShowUserName} from "./components/ShowUserName";
// import { CarDetails } from "./components/CarDetails";
// import { Fragment } from './components/Fragment';
// import { Container } from './components/Container';

// Styles - CSS (global)
import './App.css';
import { MyComponentCSSLesson } from './components/MyComponentCSSLesson';

// import { ExecuteFunction } from './components/ExecuteFunction';
// import { Message } from './components/Message';


import { useState } from "react";
import { CSSModules } from './components/CSSModules';
// import { ChangeMessageState } from './components/ChangeMessageState';
// import { UserDetails } from './components/UserDetails';



export function App() {
  // const name = "Joaquim de forma Dinâmica";
  // const [userName] = useState("Maria com useState");
  // const cars = [
  //   {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
  //   {id: 2, brand: "VW", color: "Preto", newCar: false, km: 5000},
  //   {id: 3, brand: "Ford", color: "Prata", newCar: false, km: 3540},
  //   {id: 4, brand: "Crysler", color: "Preta", newCar: true, km: 0}
  // ];

  // function showMessage(){
  //   console.log("Executando função do pai!")
  // }

  // const [message, setMessage] = useState("");
  // const handleMessage = (msg) => {
  //   setMessage(msg);
  // }

  // const userData = [
  //   {name: "Rafael", age: 30, occupation: "Coffee drinker", id: 1},
  //   {name: "Renato", age: 15, occupation: "Overwatch loser", id: 2},
  //   {name: "Rodrigo", age: 32, occupation: "Professional Farter", id: 3}
  // ]

  const n = 5;
  const [name] = useState("Roger");
  const redTitle = false;

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
     {/* {cars.map((car)=>(
      <CarDetails 
        key={car.id}
        id={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}
       /> 
     ))} */}
     {/* <Fragment propsFragment="TESTE"/> */}
     <hr />
     {/* children */}
     {/* <Container myValue="testing">
      <p>E este é o conteúdo 1</p>
      <p>E este é o conteúdo 2</p>
      <p>E este é o conteúdo 3</p>
     </Container> */}
     {/* executar função */}
     {/* <ExecuteFunction myFunction={showMessage}/> */}
     {/* state lift */}
     {/* <Message msg={message} />
     <ChangeMessageState handleMessage={handleMessage}/>
     <hr/> */}
     {/* Exercício 4 */}
     {/* <h3>Nossos usuários podem dirigir?</h3>
     {userData.map((user)=>(
      <UserDetails  
        key={user.id}
        name={user.name}
        age={user.age}
        occupation={user.occupation}
      />
     ))} */}
     {/* Avançando no CSS */}
      {/* CSS GLOBAL */}
      <h2>React com CSS</h2>
      <p>This is the paragraph out in the app</p>
      {/* CSS NO COMPONENTE */}
      <MyComponentCSSLesson />
      {/* CSS INLINE */}
      <p style={{
        color: "greenyellow",
        padding: "25px", 
        marginTop: "5px",
        borderTop: "2px solid greenyellow", 
        borderBottom: "2px solid greenyellow", 
        backgroundColor: "lightblue"
        }}>
        This element was styled with INLINE CSS
      </p>
      {/* CSS INLINE DINÂMICO */}
      <h2 style={{color: "lightblue"}}>CSS Dinâmico:</h2>
      <h3 style={n < 10 ? ({color: "greenyellow"}) : ({color: "tomato"})}>Less than 5 Green; More than 5 Reddish;</h3>
      <h3 style={name === "Rafael"  ? ({color: "greenyellow"}) : ({color: "tomato"})}>{name}</h3>
      {/* CLASSES DINÂMICAS NO CSS */}
      <h3 className={redTitle ? "red-title" : "green-title"}>This title will use Dinamic Class!</h3>

      {/* CSS MODULES ☺ THE ONE TO BE USED /o/*/}
      <CSSModules />
      <h2 className='my_title'>Testing the same class name but out of component</h2>

    </div>
  );
}

