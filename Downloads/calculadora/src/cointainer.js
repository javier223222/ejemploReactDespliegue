import React from "react";
import Display from "./Display";
import {evaluate} from 'mathjs'
import name from "./error";
class TextTarea extends React.Component{
   constructor(props){
    super(props)
    this.state={
      input:'0',
      result:0
    }
    this.handleClickcero = this.handleClickcero.bind(this);
    this.handleClickone  = this.handleClickone.bind(this);
    this.handleClicktwo=this.handleClicktwo.bind(this);
    this.handleClickthree=this.handleClickthree.bind(this);
    this.handleClickfour=this.handleClickfour.bind(this);
    this.handleClickfive=this.handleClickfive.bind(this);
    this.handleClicksix=this.handleClicksix.bind(this);
    this.handleClickseven=this.handleClickseven.bind(this);
    this.handleClickeight=this.handleClickeight.bind(this);
    this.handleClicknine=this.handleClicknine.bind(this);
    this.handleClicksum=this.handleClicksum.bind(this);
    this.handleClicksubstract=this.handleClicksubstract.bind(this)
    this.handleClickmultiply=this.handleClickmultiply.bind(this);
    this.handleClickdivision=this.handleClickdivision.bind(this);
    this.handleClickpoint=this.handleClickpoint.bind(this);
    this.handleClickclear=this.handleClickclear.bind(this);
    this.handleClickequals=this.handleClickequals.bind(this)

   }
   handleClickcero(){
        this.setState({
         input:this.state.input=='0'?'0':this.state.input+'0'
        })
        console.log(this.state.input)
   }
   handleClickone(){
      this.setState({
         input:this.state.input=='0'?'1':this.state.input+'1'
        })
        console.log(this.state.input)
   }
   handleClicktwo(){
      this.setState({
         input:this.state.input=='0'?'2':this.state.input+'2'
        })
        console.log(this.state.input)
   }
   handleClickthree(){
      this.setState({
         input:this.state.input=='0'?'3':this.state.input+'3'
        })
        console.log(this.state.input)
   }
   handleClickfour(){
      this.setState({
         input:this.state.input=='0'?'4':this.state.input+'4'
        })
        console.log(this.state.input)
   }
   handleClickfive(){
      this.setState({
         input:this.state.input=='0'?'5':this.state.input+'5'
        })
        console.log(this.state.input)
   }
   handleClicksix(){
      this.setState({
         input:this.state.input=='0'?'6':this.state.input+'6'
        })
        console.log(this.state.input)
   }
   handleClickseven(){
      this.setState({
         input:this.state.input=='0'?'7':this.state.input+'7'
        })
        console.log(this.state.input)
   }
   handleClickeight(){
      this.setState({
         input:this.state.input=='0'?'8':this.state.input+'8'
        })
        console.log(this.state.input)
   }
   handleClicknine(){
      this.setState({
         input:this.state.input=='0'?'9':this.state.input+'9'
        })
        console.log(this.state.input)
   }
   handleClicksum(){
      this.setState({
         input:this.state.input!=''&&this.state.input[this.state.input.length-1]!='-'&&this.state.input[this.state.input.length-1]!='*'&&this.state.input[this.state.input.length-1]!='/'&&this.state.input[this.state.input.length-1]!='+'?this.state.input+'+':this.state.input
        })
        console.log(this.state.input)
   }
   handleClicksubstract(){
      this.setState({
         input:this.state.input!=''&&this.state.input[this.state.input.length-1]!='-'&&this.state.input[this.state.input.length-1]!='*'&&this.state.input[this.state.input.length-1]!='/'&&this.state.input[this.state.input.length-1]!='+'?'-':this.state.input+'-'
        })
        console.log(this.state.input)
   }
   handleClicksubstract(){
      this.setState({
         input:this.state.input!=''&&this.state.input[this.state.input.length-1]!='-'&&this.state.input[this.state.input.length-1]!='*'&&this.state.input[this.state.input.length-1]!='/'&&this.state.input[this.state.input.length-1]!='+'?this.state.input+'-':this.state.input
        })
        console.log(this.state.input)
   }
   handleClickmultiply(){
      this.setState({
         input:this.state.input!=''&&this.state.input[this.state.input.length-1]!='-'&&this.state.input[this.state.input.length-1]!='*'&&this.state.input[this.state.input.length-1]!='/'&&this.state.input[this.state.input.length-1]!='+'?this.state.input+'*':this.state.input
        })
        console.log(this.state.input)
   }
   handleClickdivision(){
      this.setState({
         input:this.state.input!=''&&this.state.input[this.state.input.length-1]!='-'&&this.state.input[this.state.input.length-1]!='*'&&this.state.input[this.state.input.length-1]!='/'&&this.state.input[this.state.input.length-1]!='+'?this.state.input+'/':this.state.input
        })
        console.log(this.state.input)
   }
   handleClickpoint(){
      this.setState({
         input:this.state.input!=''&&this.state.input[this.state.input.length-1]!='-'&&this.state.input[this.state.input.length-1]!='*'&&this.state.input[this.state.input.length-1]!='/'&&this.state.input[this.state.input.length-1]!='+'&&this.state.input[this.state.input.length-1]!='.'?this.state.input+'.':this.state.input
        })
        console.log(this.state.input)
   }
   handleClickclear(){
      this.setState({
         input:'0'
        })
        console.log(this.state.input)
   }
   handleClickequals(){
      try{
         this.setState({
            input:evaluate(this.state.input)
           })
      }catch(e){
         console.log(e)
         name()
        
        
      }
      
        console.log(this.state.input)
   }

  
   render(){
     
    return(
            
        <div  className="container principal text-center justify-content-md-center">
           <Display input={this.state.input}></Display>
           <div className="row">
           <div className="col columna1"><div id="clear" onClick={this.handleClickclear}>AC</div></div>
           <div className="col columna1"><div id="divide" onClick={this.handleClickdivision}>/</div></div> 
           <div className="col columna1"><div id="multiply" onClick={this.handleClickmultiply}>*</div></div> 
           
        
        
           
           </div>
          
           <div className="row">
           <div className="col columna2"><div id="seven" onClick={this.handleClickseven}>7</div></div> 
            <div className="col columna2"><div id="eight" onClick={this.handleClickeight}>8</div></div>
            <div className="col columna2"><div id="eight" onClick={this.handleClicknine}>9</div></div>
          
            <div className="col columna2"><div id="subtract" onClick={this.handleClicksubstract}>-</div></div>
            
           </div>
           <div className="row">
            
       
           <div className="col columna2"><div id="four" onClick={this.handleClickfour}>4</div></div> 
            <div className="col columna2"><div id="five" onClick={this.handleClickfive}>5</div></div>
            <div className="col columna2"><div id="six" onClick={this.handleClicksix}>6</div></div> 
            <div className="col columna2"><div id="add" onClick={this.handleClicksum}>+</div></div>
           </div>
          <div className="row">
          <div className="col columna2"><div id="one" onClick={this.handleClickone}>1</div></div>
          <div className="col columna2"><div id="two" onClick={this.handleClicktwo}>2</div></div>
          <div className="col columna2"> <div id="three" onClick={this.handleClickthree}>3</div></div>
         
         
         
           
          </div>
          <div className="row">
          <div className="col columna2"><div id="zero"  onClick={this.handleClickcero}>0</div></div>
          <div className="col columna2"><div id="decimal" onClick={this.handleClickpoint}>.</div></div> 
          <div className="col columna2"><div id="equals" onClick={this.handleClickequals}>=</div></div> 
          </div>
        </div>
       
       
    )
   }
}

export default TextTarea
