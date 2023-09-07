import React from "react";
 
class ClsCompEx extends React.Component{
    constructor(props){
        super(props);
        this.state={countcls:0,isMe:true}
    }
    incrementcls = ()=>{
       this.setState(
        (prevSt)=>({
            countcls:prevSt.countcls+5
        })
       )
    }
render(){
    return<>
    <h3 className="page-heading">Class component example: Counter</h3>
    <div className="pg-cnt-cntr">
    { this.state.isMe &&
    <><p>{this.state.countcls}</p> 
    <button onClick={this.incrementcls}>Add</button></>
    }
    <p style={{paddingTop:'1em'}}>
    <button onClick={()=>this.setState({isMe:!this.state.isMe})}> {this.state.isMe ? 'Hide Calc' : 'Show Calc' }</button></p>
    </div>
    </>
}
}

export default ClsCompEx