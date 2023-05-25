import React from "react";
class GeneralText extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <p className='text-center' id={this.props.id}>{this.props.title}</p>
        )
    }
}
export default GeneralText;