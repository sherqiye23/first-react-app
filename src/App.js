// import logo from './logo.svg'
// import React from 'react';
import './style.css';
import Button from './button'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <Button text="Click Me" />
    <div className="App" >
      <img src="/logo192.png" alt="Random" />
      {/* inline css */}
      <h1 style={{backgroundColor:"pink", color:"red"}}>Welcome to React</h1>
      <p className = "parag">This is a simple React App.</p>
      <p>This is a simple React App.</p>  
    </div>
    </Fragment>
    
  );
}

export default App;
