import React from "react";
import GeneralText from "./GenralText";
class Timer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
         <div className="timer-container text-center pb-1">
            <div className="pt-1">
            <GeneralText title='Session' id={'timer-label'}></GeneralText>
            <GeneralText  title={this.props.time} id={"time-left"}></GeneralText>
            </div>
            
         </div>
        );
    }
}
export default Timer;