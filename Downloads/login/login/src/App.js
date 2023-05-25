import React from 'react'
import './App.css';
import Login from './Longin';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Container>
        <Row>
          <Col>
          <Login></Login>
          </Col>
        </Row>
      </Container>
     
    )
  }
}

export default App;
