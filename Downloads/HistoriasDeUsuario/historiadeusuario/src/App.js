
import './App.css';
import library from './img/libreria.png'
import Navbar from './Navbar';
import Datos from './Datos';
import React from 'react'
import Problematica from './Problematica';
import PropuestaDeSolucion from './PropuestaDeSolucion';
import Prototipo from './Prototipo';
import prototipo1 from './img/prototipoUno.PNG'
import prototipo12 from './img/prototipo2.PNG'
import prototipo3 from './img/prototipo3.PNG'
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
       <div>
          <Navbar></Navbar>
          <div class="text-center imagen-principal">
             < img src= {library}class="rounded img-fluid"  alt="Imagen de libreria"></img>

         </div>
         <Datos></Datos>
         <Problematica></Problematica>
         <PropuestaDeSolucion></PropuestaDeSolucion>
         <Prototipo image={prototipo1} descripciontitle={`Tablas para visualizar libros y agregar libros`} descripcion1={'El objetivo de esta modulo es poder visualizar todos libros,agregar nuevos libros,eliminar y actualizar'}></Prototipo>
         <Prototipo image={prototipo12} descripciontitle={`Visualizar los prestamos en curso y los prestamos vencidos`} descripcion1={'El objetivo de este modulo es poder visualizar quienes han presatados lbros y a quienes ya se le vencieron los prestamos'}></Prototipo>
         <Prototipo image={prototipo3} descripciontitle={`Visualizar reportes sobre le inventario de los libros`} descripcion1={'El objetivo de esta modulo es poder visualizar la lista de todos los libros,las metricas sobre libros perdidos y comparcion con reportes anteriores'}></Prototipo>
       </div>
    );
  }
}


export default App;
