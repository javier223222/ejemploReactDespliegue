import React from "react";

class TextTarea extends React.Component{
   constructor(props){
    super(props)
    this.state={
        estado:false
    }
    this.cambiar=this.cambiar.bind(this)
   }
   cambiar(){
     let actual=this.state.estado
     this.setState({
        estado:!actual?true:false
     })
     console.log(this.state.estado)
     cambiarColor(this.state.estado)
   }

   render(){
    return(
        <div id="container" className=" editorWrap">
            <div className="toolbar">
            <span class="material-symbols-outlined edit">edit</span>
            <p className="editar-text">Editor</p>
           
            <span class="material-symbols-outlined full"  onClick={this.cambiar}>fullscreen</span>
            
           
            </div>
             <textarea  id="editor" value={this.props.input} onChange={this.props.getInput}>
                     
            </textarea>
        </div>
        
    )
   }
}
function cambiarColor(estado){
   if(estado){
   document.getElementById('container').classList.remove('maximized')
   document.getElementById('preview').classList.remove('hide')
   }else{
    document.getElementById('container').classList.add('maximized')
    document.getElementById('preview').classList.add('hide')
   }
}
export default TextTarea