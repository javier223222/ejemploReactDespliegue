import React from "react";
import Display from "./Display";
import ContendorBox from "./ContedorBoton";

class DrumMachine extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sound:' '
        }
        this.click1= this.click1.bind(this)
        this.click2= this.click2.bind(this)
        this.click3= this.click3.bind(this)
        this.click4= this.click4.bind(this)
        this.click5= this.click5.bind(this)
        this.click6= this.click6.bind(this)
        this.click7= this.click7.bind(this)
        this.click8= this.click8.bind(this)
        this.click9= this.click9.bind(this)
    }
    click1=()=>{
        play("Q")
        this.setState({
            sound:'Heater 1'
        })
    }
    click2=()=>{
        play("W")
        this.setState({
            sound:'Heater 2'
        })
    }
    click3=()=>{
        play("E")
        this.setState({
            sound:'Heater 3'
        })
    }
    click4=()=>{
        play("A")
        this.setState({
            sound:'Heater 4'
        })
    }
    click5=()=>{
        play("S")
        this.setState({
            sound:'Clap'
        })
    }
    click6=()=>{
        play("D")
        this.setState({
            sound:'Open-HH'
        })
    }
    click7=()=>{
        play("Z")
        this.setState({
            sound:'Kick-n-Hat'
        })
    }
    click8=()=>{
        play("X")
        this.setState({
            sound:'Kick'
        })
    }
    click9=()=>{
        play("C")
        this.setState({
            sound:'Closed-HH'
        })
    }

    
    render(){
        return(
            <div id="drum-machine" className=" container  drum">

             
             <ContendorBox  
             click1={this.click1}
              click2={this.click2} 
              click3={this.click3} 
              click4={this.click4} 
              click5={this.click5} 
              click6={this.click6} 
              click7={this.click7}
              click8={this.click8}
              click9={this.click9}
            songq={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"} 
             songw={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"} 
             songE={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"} 
             songA={"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"} 
             songS={"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}
             songD={"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}
             songZ={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"} 
             songX={"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}
             songC={"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}></ContendorBox>
             <Display sound={this.state.sound}></Display>
            </div>
          
      
        )
    }

}
function play(id) {
    let i =document.getElementById(id)
    i.play()
    
}
export default DrumMachine