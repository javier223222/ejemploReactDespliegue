import React from "react";
import Icono from "./Icono";
class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="contenedor-carta ">
               <div className="card" >
            <div className="card-body">
            <Icono imagen={this.props.imagen}></Icono>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.subtitulo}</h6>
            <p className="card-text">{this.props.explicacion}</p>
        
            </div>
          </div>
            </div>
            
        );
    }
}
export default Card;