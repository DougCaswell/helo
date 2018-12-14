import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Nav from './component/Nav/Nav';
import Route from './route'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          <Route />
        </div>
      </HashRouter>
    );
  }
}

export default App;
