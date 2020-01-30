import React from 'react';
import HomePage from './components/HomePage';
import Modal from './components/Modal'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        {/* <HomePage/> */}
        <Modal/>
      </div>
    );
  }
}

export default App;
