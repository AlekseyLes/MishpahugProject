import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import MainPage from './components/MainPage';

class App extends Component {

  render() {
      return (<div>
              <div><MainPage/></div>
              <div><RegistrationForm/></div>
              </div>

          );


  }
}

export default App;
