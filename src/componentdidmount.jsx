import React from "react";
import withHoc from "./hocDemo";

class CompDidmnt extends React.Component{
    constructor(props){
        super(props);
        this.state={users:[],isLoaded:false,searchtxt:''}
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>this.setState({users:data,isLoaded:true,searchtxt:''}))
        
    }
 
    srchVal = (e)=>{
        this.setState({searchtxt:e.target.value})
    }
     
    render(){        
        return <>  
        <h3 className="page-heading">ComponentDidMount: Fetch data from 'jsonplaceholder.typicode.com'</h3>
        <div className="pg-cnt-cntr">
        {this.state.searchtxt}
        <p>
            <input type="text" placeholder="Search by username..." value={this.state.searchtxt} name='srchtxt' onChange={this.srchVal} />
            <span style={{color:'red',marginLeft:'10px',fontSize:'12px'}}>*case sensitive</span>
        </p>
        { this.state.isLoaded ?
       <table className="table table-striped table-dark" style={{width:'50%'}}>
       <thead>
           <tr>

               <th>Name</th>
               <th>Username</th>
           </tr>
       </thead> <tbody>
            {
                //(<tr key={lt.id}><td>{lt.name}</td> <td>{lt.email}</td></tr>)
                (this.state.users).filter((user)=>(user.username).includes(this.state.searchtxt)).map((user)=><tr key={user.id}><td>{user.name}</td><td>{user.username}</td></tr>)
            }
        </tbody>
                </table>
        : 'Loading ...'
    }</div></>
    }
}

export default withHoc(CompDidmnt)