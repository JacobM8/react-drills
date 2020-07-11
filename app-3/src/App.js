// Create an app where there is an array of data on state that is then shown on the DOM as a list. There 
// should also be a way for the user to filter what's shown in the list. The array of data can be as simple 
// as an array of strings. The list can be as simple as a list of <h2> elements.
// See https://github.com/DevMountain/react-drills
// "npx create-react-app folder-name" command in terminal to create new react app

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ['spaghetti ', 'ice cream ', 'sushi ', 'bologna ', 'cheese '],
      userInput: ''
    };
  }

  inputHandler = input => {
    this.setState({ userInput: input })
  }

  render() {
    const outputList = this.state.list.filter((item, index) => {
      return item.match(this.state.userInput);
    }).map((item, index) => {
      return <h2 key={index}>{item}</h2>
    })

    return (
      <div>
        <div className="row" style={{ textAlign: 'center' }}>
          <input onChange={e => this.inputHandler(e.target.value)} />
          {outputList}
        </div>
      </div>
    );
  }
}

export default App;