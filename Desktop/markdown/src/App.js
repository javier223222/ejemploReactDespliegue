import logo from './logo.svg';
import './App.css';

import React from 'react';
import Preview from './Preview';
import TextTarea from './TexTarea';
import renderMarkef from './Node';
const capibara='# El capibara \n\n'
const capibaraimg='![](https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT565iw3g--MuK9rk0DvbL7l8mn0Fl50E-pO-927skg_Nl2xxemty4I_ErJGGMDLW_1js6PEZ0B15WAQg8) \n'
const capibaraInfo='## el capibara o cavy gigante es nativo de suda america \n'
const aquiAlgoDeCodigo='Aqui algo de codigo, `<div><div>`, entre dos etiquetas \n\n'
const codigo='```// esto es codigo multilinea : function helloWorld(){return helloWorld}``` \n\n'
const text=`tambien puede poner texto en negritas **negritas**... whoa!
o _italic_.
o... espera por eso... **_both!_**
y sientete libre de volverte loco ~~crossing stuff out~~. \n\n`
const links=`Un link [links](https://www.linkedin.com/in/javier-antonio-cundapi-toledo-22211a195/), y
> Block Quotes! \n\n`
const tablas=`y si te quiere volver realemnte lococ, unas  tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.\n\n`
const gustos=`1. Soy mamador.\n`
const mujeres=`1. me gustan las mujeres altas.`
              


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      input:capibara+capibaraimg + capibaraInfo +aquiAlgoDeCodigo + codigo +text+links + tablas + gustos +mujeres,
      entireScreen:false
    }
    this.handleClick = this.handleClick.bind(this);
    
    
  }
  handleClick(event){
   
    this.setState({
      input: event.target.value
    })
   
    

  }

  
  render(){
     return(
      
      <div>
       
         <TextTarea input={this.state.input}  getInput={this.handleClick} />
         <Preview input={ renderMarkef( this.state.input)}/>
      </div>
    
      
     )
  }

}

export default App;
