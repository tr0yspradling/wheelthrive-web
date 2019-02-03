import React, { Component } from 'react';
import background from './assets/350z-bg.jpg';
import './App.css';
import Navbar from './Header.js'


var sectionStyle= {
  backgroundImage: "url(" + background + ")",
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="App" style={ sectionStyle }>
          <header className="App-header">
            <h1>
              WheelThrive
            </h1>          
          </header>
        </div>
      </div>
    );
  }
}

export default App;
