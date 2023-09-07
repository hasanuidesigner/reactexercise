import React, { useState } from "react";
import { createPortal } from 'react-dom';

function Portals() {
    const [modal,setModal] = useState(false)
    return <>
    <h3 className="page-heading">Portals</h3> 
        <div style={{ width: '50%',height:'auto',margin:'auto', position: 'relative',backgroundColor:'#f3f3f3',color:'#555',textAlign:'center' }}>
            <h6>Click the below button to open a popup which is currently inside this gray bg parent div & comes from a 'Portal' concept outside this div </h6>
           {modal && createPortal(<div style={{ position: 'absolute', width: '100%', height: '100%', display: 'table',backgroundColor:'rgba(0,0,0,.9)',color:'#fff',left:'0',top:'0',padding:'15px'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut eligendi ducimus obcaecati veritatis culpa est inventore non
                corporis ex aliquam tenetur nesciunt sunt nihil sed iste, omnis, sint praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam ut eligendi ducimus obcaecati veritatis culpa est inventore non corporis ex aliquam tenetur nesciunt sunt nihil sed iste, omnis, sint praesentium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut eligendi ducimus obcaecati veritatis culpa est inventore non
                corporis ex aliquam tenetur nesciunt sunt nihil sed iste, omnis, sint praesentium.
               <p style={{margin:'20px auto auto',display:'table'}}><button onClick={()=>{setModal(false)}}>Close modal</button></p> 
            </div>,document.body)
}
        </div>
        <p style={{margin:'20px auto auto',display:'table'}}><button onClick={()=>{setModal(true)}}>Open modal</button></p> 
    </>
}

export default Portals