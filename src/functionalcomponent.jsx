import React, { useState } from "react";

function StateChngEx() {
    const [count, setCount] = useState(0);

   /*  const increment = () => {
        setCount(ps=>count+1)
    } */
    return <>
    <h3 className="page-heading">Functional component example: Counter</h3>
    <div className="pg-cnt-cntr">
        <p>{count}</p>
        <button onClick={()=>setCount(ps=>count+1)}>Add</button>
        </div>
    </>
}
export default StateChngEx