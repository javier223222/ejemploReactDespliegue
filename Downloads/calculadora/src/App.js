import logo from './logo.svg';
import './App.css';
import TextTarea from './cointainer';
import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <TextTarea></TextTarea>
    )
  }
}

export default App;
