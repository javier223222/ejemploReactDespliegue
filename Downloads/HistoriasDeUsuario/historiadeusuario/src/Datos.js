import React from "react";
import escuela from './img/escuela.png'
import dd from './img/dd.png'
import codigo from './img/codigo.png'
import boss from './img/boss.png'
import  trabajador from './img/trabajador.png'
import  telefono from './img/telefono.png'
import Icono from "./Icono";
class Datos extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container datos text-center" id="datos">
            <div className="row ">
              <div className="col">
             <Icono imagen={<span class="material-symbols-outlined">
school
</span>}></Icono>
                 <h1 className="text-center ">Nombre de la Empresa</h1>
                 <p className="text-centerz">Escuela Juaquin Cruz Calvo</p>
              </div>
              <div className="col">
              <Icono imagen={<span class="material-symbols-outlined">
apartment
</span>}></Icono>
              <h1 className="text-center">Giro de la empresa</h1>
              <p className="text-center">Sector terciario</p>
              </div>
              <div className="col">
              <Icono imagen={<span class="material-symbols-outlined">
public
</span>}></Icono>
              <h1 className="text-center">Dirección</h1>
              <p className="text-center">Ocozocoautla  de espinosa Chiapas,Zona 012.</p>
              </div>
            </div>
            <div className="row ">
              <div className="col">
              <Icono imagen={<span class="material-symbols-outlined">
engineering
</span>}></Icono>
              <h1 className="text-center">Nombre del dueño</h1>
              <p className="text-center">Vladimir de la Rosa</p>
              </div>
              <div className="col">
              <Icono imagen={<span class="material-symbols-outlined">
sensor_occupied
</span>}></Icono>
              <h1 className="text-center">Puesto</h1>
              <p className="text-center">Bibliotecaria</p>
              </div>
              <div className="col">
              <Icono imagen={<span class="material-symbols-outlined">
call_log
</span>}></Icono>
              <h1 className="text-center">Teléfono  de contacto</h1>
              <p className="text-center">9686880881</p>
              </div>
            </div>
          </div>
        );
    }
}
export default Datos;