import React from "react";

class RegformCls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            regUsers: {
                firstname: '', lastname: '', email: '', phone: ''
            },
            regUsersList: []

        }
    }
    submRegForm = (e) => {
        e.preventDefault();
        this.setState({regUsersList:[...this.state.regUsersList,this.state.regUsers]})
    }
    userIncludeaction = (e)=>{
        this.setState({regUsers:{...this.state.regUsers,[e.target.name]:e.target.value}})
    }
    render() {
        return <>              
        <h3 className="page-heading">Registration form with class component</h3>
        <div className="pg-cnt-cntr"> 
        <h5>Registration form:</h5>
            <div style={{ width: '500px', margin: 'auto' }}>
                <form onSubmit={this.submRegForm}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" name="firstname" onChange={this.userIncludeaction} value={this.state.firstname} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="lastname" onChange={this.userIncludeaction} value={this.state.lastname} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="text" className="form-control" name="email" onChange={this.userIncludeaction} value={this.state.email} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" name="phone" onChange={this.userIncludeaction} value={this.state.phone} />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
            <h5>Registered user list:</h5>
            <ul>
                {
            this.state.regUsersList.map((regusr,i)=><li key={i}>{`${regusr.firstname} .${regusr.lastname}`}</li>)
                }
            </ul>
             </div>
        </>
    }
}

export default RegformCls