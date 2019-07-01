import React, {Component} from 'react';
import './App.css';
import LoginGoogle from './components/LoginGoogle';

class App extends Component {
  render () {
      return (
        <div className="App">
        <LoginGoogle/>
      </div>  
     );
  }
} 
export default App;