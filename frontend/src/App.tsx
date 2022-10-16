import React, { useEffect, useState } from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
  const [title, setTitle] = useState("Practical Enterprise React");

  const handleAlert = () => {
    alert("I'm a button!");
    };
    
  useEffect(() => {
    alert("Welcome to the Practical Enterprise React!");
    }, [title]);          

  return (
    <>
      <h1
        onClick={() => setTitle("Become an Effective React Developer from Day 1")}
        style={{
          color: "blue",
          marginBottom: "5rem",
          textAlign: 'center'
        }}
      >
        {title}
      </h1>
      <div className="App">
        <Customer 
          firstName="Jane" 
          lastName="Doe"
          age={21} 
          isLegal={true}
          address="1313 Oakley, Clawson, MI 48017" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem"
        }}
      >
      <button
        style={{
          color: "#ffff",
          height: "2.5rem",
          width: "10rem",
          backgroundColor: "tomato",
          borderRadius: "5px",
          fontSize: "18px",
          }}
          onClick={handleAlert}        
      >
        Click me
      </button> 
      </div>   
    </>
  )
}

export default App;
