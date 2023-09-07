import React from "react";
import withCounter from "./HigherOrdercomponent";

class CounterHoverHOC extends React.Component{
    render(){
        const {count,increment} = this.props
        return<>
             <h1 onMouseOver={increment}> Hovered {count} times</h1>
        </>
    }
}

export default withCounter(CounterHoverHOC)