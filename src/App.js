import logo from './logo.svg';
import './App.css';
import Headers from './Com/Headers';
import Navigate from './Navigate/Navigate';
import { BrowserRouter as Router } from "react-router-dom";
import Foter from './Com/Foter';

function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <Navigate />
        <Foter />
      </div>
    </Router>
  );
}

export default App;
