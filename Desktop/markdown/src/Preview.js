import React from "react";
import Parser from 'html-react-parser';
class Preview extends React.Component{
      constructor(props){
        super(props)
        this.state={
          activar:false
        }
        this.cambiar=this.cambiar.bind(this)
      }
      cambiar(){
        let estado1=this.state.activar
        this.setState({
          activar:!estado1?true:false
        })
        cambiar(this.state.activar)
      }
      render(){
        return(
            <div id="preview" className="previewWrap" >
              <div className="toolbar">
              <span class="material-symbols-outlined preview">preview</span>
              <span class="material-symbols-outlined full"  onClick={this.cambiar}>fullscreen</span>
               <p>Previsualizar</p>
              </div>
              {Parser(this.props.input)}
            </div>
        )
      }
}
function cambiar(estado) {
  if(estado){
    document.getElementById('preview').classList.remove('maximized')
    document.getElementById('container').classList.remove('hide')
    }else{
     document.getElementById('preview').classList.add('maximized')
     document.getElementById('container').classList.add('hide')
    }
}
export default Preview