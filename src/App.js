// Components
import { FirstComponent } from './components/FirstComponent.js';
import { TemplateExpressions } from './components/TemplateExpressions.js';
// import { Events } from './components/Events.js';
import { Challenge } from './components/Challenge.js';

// Styles - CSS (global)
import './App.css';


export function App() {
  return (
    <div className="App">
      <main>
        <FirstComponent />
   
    
        <TemplateExpressions />
        
        <Challenge />
      </main>
    </div>
  );
}

