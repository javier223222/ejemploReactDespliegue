import logo from './logo.svg';
import './App.css';
import BreakLabel from './Label';
import BreakLength from './BreakLength';
import Timer from './Timer';
import React from 'react';
import {Row,Col,Container, Button} from 'react-bootstrap';
import {VscDebugStart,VscDebugRestart} from 'react-icons/vsc'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
       breakLenght:5,
      sessionLength:25,
      fechaFutura:null,
      diferenciaTemporal:0,
      idInterval:null,
      tiempo:25+":"+"00",
      estado:true

      
    }

    this.incrementBreak=this.incrementBreak.bind(this)
    this.incrementSession=this.incrementSession.bind(this);
    this.decrementSession=this.decrementSession.bind(this);
    this.decrementSbreak=this.decrementSbreak.bind(this);
    this.reset=this.reset.bind(this);
    this.start=this.start.bind(this);
    this.pausarTemporizador=this.pausarTemporizador.bind(this);
    this.start2=this.start2.bind(this)
  }
  pausarTemporizador(){
    this.setState({
      diferenciaTemporal:this.state.fechaFutura.getTime() - new Date().getTime()
    })

    clearInterval(this.state.idInterval);
  }
  incrementBreak(){
    if(this.state.estado){
      this.setState({
        breakLenght:this.state.breakLenght<60?this.state.breakLenght+1:60
      })
    }
    
  }
  incrementSession(){
    if(this.state.estado){
      this.setState({
        sessionLength:this.state.sessionLength<60?this.state.sessionLength+1:60,
        tiempo:this.state.sessionLength+1+":"+"00"
      })
    }
   
  }
  decrementSession(){
    if(this.state.estado){
      this.setState({
        sessionLength:this.state.sessionLength>1?this.state.sessionLength-1:1,
        tiempo:this.state.sessionLength-1+":"+"00"
      })
    }
    
  }
  reset(){
    clearInterval(this.state.idInterval)
    this.setState({
      breakLenght:5,
      sessionLength:25,
      fechaFutura:null,
      diferenciaTemporal:0,
      idInterval:null,
      tiempo:25+":"+"00",
      estado:true
    })
  
  }
  decrementSbreak(){
    if(this.state.estado){
      this.setState({
        breakLenght:this.state.breakLenght>1?this.state.breakLenght-1:1
      })
    }
    
  }
  start(){
    if(this.state.estado){
      this.setState({
        estado:!this.state.estado
      })
    if(this.state.fechaFutura){
      this.setState({
        fechaFutura:new Date(new Date().getTime()+this.state.diferenciaTemporal),
        diferenciaTemporal:0
      })
    }else{
      const milisegundos=(0+(this.state.sessionLength*60)*1000)
      this.setState({
        fechaFutura:new Date(new Date().getTime()+milisegundos)
      })
    }
    clearInterval(this.state.idInterval)
    this.setState({
      idInterval:setInterval(()=>{
        this.setState({
          sessionLength:this.state.fechaFutura.getTime()-new Date().getTime()
        })
        if(this.state.sessionLength<=0){
          clearInterval(this.state.sessionLength)
         const audio= document.getElementById('time-over')
         audio.play()
       
         this.setState({
          
          sessionLength:25,
          fechaFutura:null,
          diferenciaTemporal:0,
          idInterval:null,
          tiempo:25+":"+"00",
          estado:true
          
        })
         this.start2()
  
        }else{
          this.setState({
            tiempo:milisegundosAMinutosYSegundos(this.state.sessionLength)
          })
        }
        
      },50)
    })
    }else{
      this.pausarTemporizador()
    }
    this.setState({
      estado:!this.state.estado
    })
 
  
  }
  start2(){
    console.log('dddd')
    if(this.state.estado){
      this.setState({
        estado:!this.state.estado
      })
    if(this.state.fechaFutura){
      this.setState({
        fechaFutura:new Date(new Date().getTime()+this.state.diferenciaTemporal),
        diferenciaTemporal:0
      })
    }else{
      const milisegundos=(0+(this.state.breakLenght*60)*1000)
      this.setState({
        fechaFutura:new Date(new Date().getTime()+milisegundos)
      })
    }
    clearInterval(this.state.idInterval)
    this.setState({
      idInterval:setInterval(()=>{
        this.setState({
          sessionLength:this.state.fechaFutura.getTime()-new Date().getTime()
        })
        if(this.state.sessionLength<=0){
          clearInterval(this.state.sessionLength)
         const audio= document.getElementById('time-over')
         audio.play()
         this.start2()
         
  
        }else{
          this.setState({
            tiempo:milisegundosAMinutosYSegundos(this.state.sessionLength)
          })
        }
        
      },50)
    })
    }else{
      this.pausarTemporizador()
    }
    this.setState({
      estado:!this.state.estado
    })
 
  }
 
  render(){
    return(
      <Container className='justify-content-md-center mt-5 pt-5'>
      <div>
      <BreakLabel></BreakLabel>
       <Row className="justify-content-md-center p-2">
         <Col className='px-3'> <BreakLength cantidad={this.state.breakLenght} increment={this.incrementBreak} 
         decrement={this.decrementSbreak}
         title={'Break Length'}
         idOne={'break-label'}
         idTwo={'break-increment'}
         idThree={'break-length'}
         idFour={'break-decrement'}
         ></BreakLength></Col>
         <Col className='px-3'><BreakLength cantidad={this.state.sessionLength} increment={this.incrementSession} 
         decrement={this.decrementSession}
         title={'Session Length'}
         idOne={'session-label'}
         idTwo={'session-increment'}
         idThree={'session-length'}
         idFour={'session-decrement'}
         
         ></BreakLength></Col>
       </Row>
       <Row className="justify-content-md-center">
        <Col><Timer time={this.state.tiempo}></Timer></Col>
       </Row>
        <Row className="justify-content-md-center text-center iconos px-5">
          <Col > <Button id="start_stop" onClick={this.start}><VscDebugStart/></Button></Col>
          <Col ><Button  id="reset" onClick={this.reset}><VscDebugRestart/></Button></Col>
          
     
        </Row>
      
    
      </div>
      <audio id='time-over' preload='auto' src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
      </Container>
    )
  }
}
const milisegundosAMinutosYSegundos = (milisegundos) => {
  const minutos = parseInt(milisegundos / 1000 / 60);
  milisegundos -= minutos * 60 * 1000;
  const segundos = (milisegundos / 1000);
  return `${minutos}:${segundos.toFixed(0)}`;
};
export default App;
