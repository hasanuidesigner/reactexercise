import React from "react";
import CounterClickHOC from './HocCounterClick';
import CounterHoverHOC from './HocCounterHover';

export default class HOC extends React.Component {
    render() {
        return <>
        <h3 className="page-heading">Higher order component (HOC)</h3>        
        <div className="pg-cnt-cntr">
        <span>The counter events (click & hover) shares between these two separate components with HOC</span>
        <p>&nbsp;</p>
            <CounterClickHOC />
            <p>&nbsp;</p>
            <CounterHoverHOC />
            </div>
        </>
    }
}