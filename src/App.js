import logo from './logo.svg';
import './App.css';
import Dictionary from './Dictionary.js';

export default function App() {
  return (
    <div className="App">
      <div className="container">   
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />        
          <h3>≈ Dictionary 📙≈</h3>
        </header>
        <footer className="App-footer"> Coded by JSCO  </footer>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
