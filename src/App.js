import React,{useState} from 'react';
import './App.css';

import logo from './prometeon.png';
import Header from './components/Header';

const App = () => {

  const [name, setName] = useState('Luigi')

  return (
    <div className="App">
      <header className="my-5 App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          React Starter with Docker Compose
        </h4>
        <Header name={name} />
        <button 
          className="btn btn-primary my-5" 
          onClick={() => setName('Christin')}
          data-testid="name_changer">
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
