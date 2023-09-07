import React, { useReducer, useState } from "react";

const initialval = 0;
const emptyValReg = {"username": " ", "dept": " ", "loc": " "}
const regUserList ={regUser : [
    { "username": "Arun", "dept": "Design", "loc": "Madurai" },
    { "username": "Prabu", "dept": "Test", "loc": "Bangalore" }
]} 
const reducer = (count, action) => {
    switch (action.type) {
        case 'add':
            return count = count + action.value;

        case 'minus':
            return count = count - action.value;

        case 'reset':
            return count = initialval;
        default:
            return count

    }
}

function UsereducerFunctional() {
    const [count, dispatch] = useReducer(reducer, initialval)
    return <>
    <h3 className="page-heading">UseReducer hooks</h3>
    <div style={{display:'table',margin:'auto'}}>
        <h3>UseReducer counter</h3>
        <p>{count}</p>
        <button onClick={() => dispatch({ type: 'add',value:1 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'minus',value:1 })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
        <p>&nbsp;</p><hr />
        <div style={{display:'table',margin:'auto'}}>
        <h3>Register form</h3>
        <div>
            <UsereducerForm />
        </div>
        </div>
    </>
}

const reducerfrm = (users,action) => {
    switch(action.type){
    case 'add-user':
        const addeduser= [...users.regUser,action.payload]
        return {
            ...users,regUser:addeduser
        }                  
        break;
    default:
        return users;
    }
} 

function UsereducerForm() {
    const [reguser,setReguser] = useState(emptyValReg)
    const [users, dispatchfrm] = useReducer(reducerfrm, regUserList)

    const adduserHandler = (e)=>{
        e.preventDefault();
        dispatchfrm({type:'add-user',payload:reguser})
        setReguser(emptyValReg)
   }
   
   const changeHndler = (e)=>{
       setReguser({...reguser,[e.target.name]:e.target.value})
   }

    return <> {/* 
    {JSON.stringify(reguser)} <br/>
    { JSON.stringify(users.regUser)} */}
        <form onSubmit={adduserHandler}>
            <div style={{ width: '500px', display: 'table', margin: 'auto' }}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name='username' value={setReguser.username} onChange={changeHndler} placeholder="username" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input type="text" className="form-control" name='dept' onChange={changeHndler} value={setReguser.dept} placeholder="department" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" name="loc" onChange={changeHndler} value={setReguser.loc} placeholder="location" />
                </div>
                <div className="mb-3"><button type="submit" className="btn btn-primary">Submit</button></div>
            </div>
        </form>
        <h5>Registered list:</h5>
        <ul>
            {
                users.regUser.map((usr) => <li key={usr.username}>{usr.username}</li>)
            }
        </ul>
    </>
}

export default UsereducerFunctional