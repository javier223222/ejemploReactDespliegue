import React from "react";
import Card from "./Card";
class PropuestaDeSolucion extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
<div className="container text-center">
  <div className="row">
    <div className="col">
      <Card imagen={<span className="material-symbols-outlined">
inventory
</span>} subtitulo={"Automatizar inventario"} explicacion={`
 Se planea crear un apartado 
 en la aplicacion web para poder 
 poder manejar inventario.En este apartado 
 el usuario podrar agregar un libro con el titulo,autor,editorial,isbn y cantidad
 del libro. `}></Card>
    </div>
    <div className="col">
      <Card imagen={<span className="material-symbols-outlined">
local_library
</span>} subtitulo={"Crear un control de Prestamos"} explicacion={`Crear un apartado
donde el bibliotecario rellene los datos del solicitante,la fecha de devolucion y
en el apartado tambien podra ver quienes ya excedieron la fecha limite y todas las solicitudes`}></Card>
    </div>
    <div className="col">
      <Card imagen={<span class="material-symbols-outlined" >
bar_chart_4_bars
</span>} subtitulo={"Automatizar Reportes"} explicacion={`Dentro de la apilcacion se podra encontrar un boton que diga
                                                       generar reporte donde el sistema generara un archivo en excell con los
                                                       datos de los libros registrados`}></Card>
    </div>
  </div>
</div>
        )
    }
}
export default PropuestaDeSolucion;