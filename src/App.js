import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
