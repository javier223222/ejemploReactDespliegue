import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {AiOutlineArrowDown,AiOutlineArrowUp} from 'react-icons/ai'
class BreakLength extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return(
            <Container className="flechas">
                 <p className="text-center principal2" id={this.props.idOne}>{this.props.title}</p>
               <Row>
                 
                  
                    <Col><button className="btn btn-primary" onClick={this.props.increment} id={this.props.idTwo}><AiOutlineArrowUp/></button></Col>
                    <Col><p  className="numbers" id={this.props.idThree}>{this.props.cantidad}</p></Col>
                    <Col><button className="btn btn-primary" onClick={this.props.decrement} id={this.props.idFour}><AiOutlineArrowDown/></button></Col>
                
                </Row>
              
      
            </Container>
               
         
        )
    }
}
export default BreakLength;