import React, { createContext, useContext } from "react";

const cntVar = createContext()

function UsecntxtEx(){
    const x = 25
    return<>
   <h3 className="page-heading">Use Context hooks: Props drilling</h3>
    <cntVar.Provider value={x}>
    <div className="pg-cnt-cntr">
    <App1/>
    </div>
    </cntVar.Provider>
    </>
}

function App1(){
    return<>
   <p>  Use Context App 1</p>
    <App2/>
    </>
}

function App2(){
    return<>
   <p>  Use Context App 2</p>
    <App3/>
    </>
}

function App3(){
    return<>
   <p>  Use Context App 3</p>
    <App4/>
    </>
}

function App4(){
    return<>
   <p>  Use Context App 4</p>
    <App5/>
    </>
}

function App5(){
    const useCntx = useContext(cntVar)
    return<>
    Use Context App 5<br/> {`${useCntx} -> I am from app 1 props `}    </>
}

export default UsecntxtEx