import React from "react";
class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="contenedor-carta ">
               <div className="card" >
            <div className="card-body">
            <div className="text-center carta">
            <h5 className="card-title text-center">{this.props.imagen}</h5>
            </div>
              <h6 className="card-subtitle mb-2 text-muted">{this.props.subtitulo}</h6>
              <p className="card-text">{this.props.explicacion}</p>
        
            </div>
          </div>
            </div>
            
        );
    }
}
export default Card;