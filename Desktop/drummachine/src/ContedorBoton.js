import React from "react";
class ContendorBox extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="drum d-flex justify-content-center">
                <div className="row">
                   
                <div className="drum-pad col" onClick={this.props.click1}><audio id="Q" src={this.props.songq} className="clip"></audio>Q</div>
                <div className="drum-pad col" onClick={this.props.click2}><audio id="W" className="clip" src={this.props.songw}></audio>W</div>
                <div className="drum-pad ppp col " onClick={this.props.click3}><audio id="E" className="clip" src={this.props.songE}></audio>E</div>
                </div>
                <div className="row ">
                <div className="drum-pad col" onClick={this.props.click4}><audio id="A" src={this.props.songA} className="clip"></audio>A</div>
                <div className="drum-pad col " onClick={this.props.click5}><audio id="S" src={this.props.songS} className="clip"></audio>S</div>
                <div className="drum-pad col" onClick={this.props.click6}><audio id="D" src={this.props.songD} className="clip"></audio>D</div>
                </div >
                <div className="row">
                <div className="drum-pad col " onClick={this.props.click7}><audio id="Z" src={this.props.songZ} className="clip"></audio>Z</div>
                <div className="drum-pad col" onClick={this.props.click8}><audio id="X" src={this.props.songX} className="clip"></audio>X</div>
                <div className="drum-pad col" onClick={this.props.click9}><audio id="C" src={this.props.songC} className="clip" ></audio>C</div>
                </div>
                
                
            </div>
        )
    }
}
export default ContendorBox;