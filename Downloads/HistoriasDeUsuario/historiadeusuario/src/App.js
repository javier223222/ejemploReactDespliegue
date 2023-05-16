
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
import libreria2 from './img/Libreria2.jpeg'
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
       <div>
          <Navbar></Navbar>
          <div className="text-center imagen-principal">
             < img src= {libreria2}class="rounded img-fluid"  alt="Imagen de libreria"></img>

         </div>
         <Datos></Datos>
         <Problematica></Problematica>
         <PropuestaDeSolucion></PropuestaDeSolucion>
         <Prototipo image={prototipo1} descripciontitle={`Tablas para visualizar libros y agregar libros`} descripcion1={'El objetivo de esta  módulo  es poder visualizar todos libros,agregar nuevos libros,eliminar y actualizar'}></Prototipo>
         <Prototipo image={prototipo12} descripciontitle={`Visualizar los préstamos en curso y los préstamosvencidos`} descripcion1={'El objetivo de este módulo es poder visualizar quienes han prestados libros y a quienes ya se les vencieron los préstamos'}></Prototipo>
         <Prototipo image={prototipo3} descripciontitle={`Visualizar reportes sobre el inventario de los libros`} descripcion1={'El objetivo de esta módulo es poder visualizar la lista de todos los libros,las métricas  sobre libros perdidos y comparación con reportes anteriores'}></Prototipo>
       </div>
    );
  }
}


export default App;
