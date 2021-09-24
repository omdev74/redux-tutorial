import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="Container"> */}
        <Counter />
        {/* </div> */}
       
      </div>
    );
  }
}

export default App;
