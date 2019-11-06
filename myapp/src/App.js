import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModule from './loginModule';
import PropsDemo from './propsDemo'

class App  extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. Surekha Test
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <LoginModule />
        {/* <PropsDemo name="Surekha" age="58"/> */}
        
      </div>
    );
  } 
}
export default App;
