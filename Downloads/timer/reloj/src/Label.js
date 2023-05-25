import React from "react";
import {Row,Col,Container} from 'react-bootstrap';
import {AiOutlineArrowDown} from 'react-icons/ai'
class BreakLabel extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           
               <Container className="text-center" fluid="md">
                <Row  className="justify-content-md-center principal">
                    <Col>
                    <p>25 + 5 Clock</p>
                    </Col>
                </Row>
               </Container>
           

        );
    }
}
export default BreakLabel;