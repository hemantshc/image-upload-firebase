import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ImageUpload from './components/ImageUpload';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ImageUpload/>
      </div>
    );
  }
}

export default App;
