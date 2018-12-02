import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}!</h1>;
  }
}

export default App;
