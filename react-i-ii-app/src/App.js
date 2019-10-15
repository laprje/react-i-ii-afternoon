import React, {Component} from 'react';
import Data from './data';
import './App.css';
import Box from './box';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        Home
      </header>
      <div className="App-body">
        <Box />
        
      </div>
    </div>
  );
}
}

export default App;
