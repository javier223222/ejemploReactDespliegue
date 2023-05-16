import React from "react";
import Card from "./Card";
class PropuestaDeSolucion extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
<div className="container text-center" id="solucion">
  <div className="row">
    <div className="col">
      <Card imagen={<span className="material-symbols-outlined">
inventory
</span>} subtitulo={"Automatizar inventario"} explicacion={`
 Se planea crear un apartado 
 en la aplicación web para poder 
 poder manejar inventario.En este apartado 
 el usuario podrá agregar un libro con el título,autor,editorial,isbn y cantidad
 del libro. `}></Card>
    </div>
    <div className="col">
      <Card imagen={<span className="material-symbols-outlined">
local_library
</span>} subtitulo={"Crear un control de  Préstamos"} explicacion={`Crear un apartado
donde el bibliotecario rellene los datos del solicitante,la fecha de devolución y
en el apartado también podrá ver quienes ya excedieron la fecha límitey todas las solicitudes`}></Card>
    </div>
    <div className="col">
      <Card imagen={<span class="material-symbols-outlined" >
bar_chart_4_bars
</span>} subtitulo={"Automatizar Reportes"} explicacion={`Dentro de la aplicación se  podrá  encontrar un boton que diga
                                                        generará reporte donde el sistema generara un archivo en excel con los
                                                       datos de los libros registrados`}></Card>
    </div>
  </div>
</div>
        )
    }
}
export default PropuestaDeSolucion;