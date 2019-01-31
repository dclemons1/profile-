import React, { Component } from 'react';
import Summary from './Component/Summary';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Resume from './Component/Resume';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header />
      <Summary />
      <Resume />
      <Contact />
      </div>
    );
  }
}

export default App;
