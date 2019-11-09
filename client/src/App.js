import React, { Component } from 'react';

import './App.css';

import HeaderContainer from './containers/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
      </div>
    );
  }
}

export default App;