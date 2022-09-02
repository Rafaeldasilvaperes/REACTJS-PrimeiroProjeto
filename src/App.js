// IMAGENS
import CityImg from "./assets/city.jpg";


// Styles - CSS (global)
import './App.css';


export function App() {
  return (
    <div className="App">
     <h1>Avançando em React</h1>
     {/* Imagem em Public */}
     <div>
      <img src="/nature-react-hero.jpg" alt="Landscape" />
     </div>
     {/* Imagem em Assets */}
     <div>
        <img src={CityImg} alt="Cidade" />
     </div>
    </div>
  );
}

