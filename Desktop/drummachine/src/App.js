import logo from './logo.svg';
import './App.css';
import DrumMachine from './DrumMachine';
import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      sound:' ',

    }
    
  }
  render (){
    return(
      <div>
        <DrumMachine></DrumMachine>
      </div>
    )
  }
}

export default App;
