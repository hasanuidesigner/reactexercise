import React, { useEffect, useState } from "react";

function Loadlist() {
    const [list, setList] = useState([])
    const [loadtm, setLoadtm] = useState(false)
    const [fltrtxt, setFltrtxt] = useState('')

    useEffect(() => {
        async function fetchUserAPI() {
            await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => setList(data))
            setLoadtm(true)
        }
        fetchUserAPI()
    }, [])
    return <>
        <h3 className="page-heading">UseEffect hooks: Fetch data from 'jsonplaceholder.typicode.com'</h3>
        <div className="pg-cnt-cntr">
            <p>
                <input type="text" placeholder="Filter with name..." onChange={(e) => { setFltrtxt(e.target.value) }} />
                <span style={{color:'red',marginLeft:'10px',fontSize:'12px'}}>*case sensitive</span>
            </p> 
            {loadtm ?
                <table className="table table-hover" style={{width:'50%'}}>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>E-mail</th>
                        </tr>
                    </thead> <tbody>
                        {
                            list.filter((lt) => (lt.name).includes(fltrtxt)).map((lt) => (<tr key={lt.id}><td>{lt.name}</td> <td>{lt.email}</td></tr>))
                        }
                    </tbody>
                </table>
                : 'Loading...'}
        </div>
    </>
    /*  <h5>Full List:</h5>
 
        { loadtm ?
     
     <ul>
     {
         list.map((lt)=>(<li key={lt.id}>{lt.name} e-mail addrees is <strong>{lt.email}</strong></li>))
     }
     </ul> 
      : 'Loading...'}
     </> */
}

export default Loadlist