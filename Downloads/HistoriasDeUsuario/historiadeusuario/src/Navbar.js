import React from 'react'
import logo from './logo.svg'
class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
        <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
    
    </a>
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#datos">Antecedentes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#problematicaDeLaPagina">Problemática</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solucion">Solución</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#prototipo" tabindex="-1" aria-disabled="true">Modelos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        );
    }
}
export default Navbar;