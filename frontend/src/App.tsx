import React from 'react';
import './App.css';
import Users from './components/Users';
import dotenv from "dotenv";
dotenv.config();

function App() {     

  return (
    <>
      <div className="App">        
        <header className="App-header">          
            <h1><Users /></h1>        
        </header>                       
      </div>   
    </>
  )
}

export default App;
