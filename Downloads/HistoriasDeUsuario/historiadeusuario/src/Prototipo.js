import React from "react";
class Prototipo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container px-5 " id="prototipo">
             <div className="row gx-5 align-items-center justify-content-center">
             <div className=" contanedor-img col-md-9 col-lg-6 order-1 order-lg-0">
                <div className="content-skewed content-skewed-right">
                    <img  className="content-skewed-item img-fluid shadow-lg rounded-3" src={this.props.image}></img>
                </div>
             </div>
             <div className="col-lg-6 contenedor2 order-0  mb-5 mb-lg-0 ">
                <div className="">
                    <h2>{this.props.descripciontitle}</h2>
                    <p className="lead">{this.props.descripcion1}</p>
                </div>

             </div>
             <div className="row gx-5">
               <div className="col-md-6 mb-4">
                <h6>{this.props.descripciontitle2}</h6>
                <p className="mb-2 small">{this.props.descripcion2}</p>
               </div>
               <div className="col-md-6 mb-4">
                <h6>{this.props.descripciontitle3}</h6>
                <p className="mb-2 small">{this.props.descripcion3}</p>
               </div>
             </div>
             <div className="row gx-5">
               <div className="col-md-6 mb-4">
                <h6>{this.props.descripciontitl4}</h6>
                <p className="mb-2 small">{this.props.descripcion4}</p>
               </div>
               <div className="col-md-6 mb-4">
                <h6>{this.props.descripciontitle5}</h6>
                <p className="mb-2 small">{this.props.descripcion5}</p>
               </div>
             </div>

             </div>
            </div>

        );
    }
}
export default Prototipo;