import React from "react";
class Icono extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="text-center carta">
            <h5 className="card-title text-center">{this.props.imagen}</h5>
            </div>
        );
    }
}
export default Icono;