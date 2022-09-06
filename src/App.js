// IMAGENS
// import CityImg from "./assets/city.jpg";

// Componentes
import { ManageData } from "./components/ManageData";
import { ListaRender } from "./components/ListaRender";
import { ConditionalRender } from "./components/ConditionalRender";


// Styles - CSS (global)
import './App.css';

export function App() {
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
     <ManageData />
     <ListaRender />
     <ConditionalRender />
    </div>
  );
}

