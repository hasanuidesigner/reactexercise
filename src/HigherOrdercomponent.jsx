import React from "react";

const withCounter = (WrappedComponent)=>{
    class WithCounter extends React.Component{
        constructor(props){
            super(props)
            this.state={count:0}
        }
        increment = ()=>{
            this.setState(
                ps=>{
                    return { count:ps.count + 1 }
                }
            )
        }
        render(){
            return  <WrappedComponent count={this.state.count} increment={this.increment} />
        }
    }
    return WithCounter
}

export default withCounter