import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from '../Nav';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    console.log('class Header render()');

    return (
      <div className='App'>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>  
    );
  };
};