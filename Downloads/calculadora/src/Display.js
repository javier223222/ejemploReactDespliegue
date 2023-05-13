import React from "react";
class Display extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div> 
                <div id="display" className="display">{this.props.input}</div>
            </div>
           
        )
    }
}
export default Display;