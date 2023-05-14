import React from "react";

class Display extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="display" className="display-sound">
              <p> {this.props.sound}</p>
            </div>
        )
    }
}
export default Display