import React from "react";
import escuela from './img/escuela.png'
import dd from './img/dd.png'
import codigo from './img/codigo.png'
import boss from './img/boss.png'
import  trabajador from './img/trabajador.png'
import  telefono from './img/telefono.png'
class Datos extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container datos text-center">
            <div className="row ">
              <div className="col">
              <img src= {escuela}className="rounded img-fluid img"  alt="Imagen de libreria"></img>
                 <h1 className="text-center ">Nombre de la Empresa</h1>
                 <p className="text-centerz">Escuela Juaquin Cruz Calvo</p>
              </div>
              <div className="col">
              < img src= {dd}class="rounded img-fluid img"  alt="Imagen de libreria"></img>
              <h1 className="text-center">Giro de la empresa</h1>
              <p className="text-center">Sector terciario</p>
              </div>
              <div className="col">
              < img src= {codigo}class="rounded img-fluid img"  alt="Imagen de libreria"></img>
              <h1 className="text-center">Direccion</h1>
              <p className="text-center">Ocozocuatla de espinosa Chiapas,Zona 012.</p>
              </div>
            </div>
            <div className="row ">
              <div className="col">
              < img src= {boss}class="rounded img-fluid img"  alt="Imagen de libreria"></img>
              <h1 className="text-center">Nombre del duenio</h1>
              <p className="text-center">Vladimir de la Rosa</p>
              </div>
              <div className="col">
              < img src= {trabajador}class="rounded img-fluid img"  alt="Imagen de libreria"></img>
              <h1 className="text-center">Puesto</h1>
              <p className="text-center">Bibliotecaria</p>
              </div>
              <div className="col">
              < img src= {telefono}class="rounded img-fluid img"  alt="Imagen de libreria"></img>
              <h1 className="text-center">Telefono de contacto</h1>
              <p className="text-center">9686880881</p>
              </div>
            </div>
          </div>
        );
    }
}
export default Datos;