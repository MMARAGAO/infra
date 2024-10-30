import './App.css';
import Navigation from './Navigation';
import { DarkModeProvider } from './context/DarkModeContext';



function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Navigation />
      </DarkModeProvider>
    </div>
  );
}

export default App;
