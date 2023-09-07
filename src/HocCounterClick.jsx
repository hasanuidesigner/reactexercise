import React from "react";
import withCounter from "./HigherOrdercomponent";

class CounterClickHOC extends React.Component {
    render() {
        const {count,increment} = this.props
        return <>
            <button onClick={increment}> Clicked {count} times </button>
        </>
    }
}

export default withCounter(CounterClickHOC)