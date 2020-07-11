// Create a basic react app where you type in a text box and it shows up as text on the DOM.
// See https://github.com/DevMountain/react-drills
// "npx create-react-app folder-name" command in terminal to create new react app

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    userInput: ''
  }

  inputHandler = input => {
    this.setState({userInput: input})
  }

  render(){
    return(
      <div style={{textAlign: 'center'}}>
        <input onChange={e=>this.inputHandler(e.target.value)}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;