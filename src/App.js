// IMAGENS
// import CityImg from "./assets/city.jpg";

// Componentes
// import { ManageData } from "./components/ManageData";
// import { ListaRender } from "./components/ListaRender";
// import { ConditionalRender } from "./components/ConditionalRender";
import {ShowUserName} from "./components/ShowUserName";

// Styles - CSS (global)
import './App.css';
import { useState } from "react";


export function App() {
  const name = "Joaquim de forma Dinâmica";
  const [userName] = useState("Maria com useState");

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
     <ShowUserName nome="Rafael direto no comp." />
     <ShowUserName nome={name} />
     <ShowUserName nome={userName} />
    </div>
  );
}

