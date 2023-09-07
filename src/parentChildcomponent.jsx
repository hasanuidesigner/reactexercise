import React from "react";

class ParentComp extends React.Component {
    constructor(props) {
        super(props);
        this.state={prntnm:'Arivu'}
    }
    chngSt = ()=>{
        this.setState({prntnm:'Alagan'})
    }
    render() {
        return <>
        <h3 className="page-heading">Passing data from parent tochild component</h3>
        <div className="pg-cnt-cntr">
            I am Parent
            <ChildComp name={this.props.name} prntState={this.state.prntnm} />
            <p> <button onClick={this.chngSt}>Change state</button></p>
            </div>
        </>
        
    }
}

 function ChildComp(props){
      const {name,prntState} = props;
        return <>
            <p>I am a child-comp</p>
            I am <span style={{fontWeight:"bolder"}}>{name}</span> from parent component with state <span style={{fontWeight:"bolder"}}>{prntState}</span>
        </>
   
}

export default ParentComp