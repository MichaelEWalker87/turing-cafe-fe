import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.jsx'
import  PropTypes  from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
        </div>
        <Reservations />
      </div>
    )
  }
}

export default App;
