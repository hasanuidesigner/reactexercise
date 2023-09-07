import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Examples for: </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Function component</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/ClsCompEx'>Class Componenet</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/ParentComp'>Parent to Child props pass</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/Loadlist'>useeffect</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/CompDidmnt'>Component did mount</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/UsereducerFunctional'>Usereducer with Functional</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/RegformCls'>Register form with Class</NavLink>
        </li> 
        <li>
        <NavLink className="nav-link" to='/UsecntxtEx'>Use Context</NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to='/HOC'>Higher Order Component</NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to='/Portals'>Portals</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}

export default Navbar