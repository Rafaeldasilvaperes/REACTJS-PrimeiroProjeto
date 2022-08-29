// Components
import { FirstComponent } from './components/FirstComponent.js';
import { TemplateExpressions } from './components/TemplateExpressions.js';

// Styles - CSS (global)
import './App.css';


export function App() {
  return (
    <div className="App">
      <header className="App__header">
        <FirstComponent className="" />
      </header>
      <TemplateExpressions />
    </div>
  );
}

