import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import StateChngEx from './functionalcomponent'
import ClsCompEx from './classcomponent'
import ParentComp from './parentChildcomponent'
import Loadlist from './useeffect'
import CompDidmnt from './componentdidmount'
import UsereducerFunctional from './usereducerfun'
import RegformCls from './regformclsscmp';
import UsecntxtEx from './usecontextex';
import HOC from './higherordercomponenetEx';
import Portals from './portals';
import Navbar from './navbar'

function App() { 
  return (
    <>
    <BrowserRouter> 
    <Navbar/>
    <div style={{padding:'1em'}}>
    <Routes>
      <Route path='/HOC' element={<HOC/>} />
      <Route path='/UsecntxtEx' element={<UsecntxtEx/>} />
      <Route path='/ClsCompEx' element={<ClsCompEx/>} />
      <Route path='/ParentComp' element={<ParentComp name={'Charan'}/>} />
      <Route path='/Loadlist' element={<Loadlist/>} />
      <Route path='/CompDidmnt' element={<CompDidmnt/>} />
      <Route exact path='/' element={<StateChngEx/>} />
      <Route path='/UsereducerFunctional' element={<UsereducerFunctional/>} />
      <Route path='/RegformCls' element={<RegformCls/>} />
      <Route path='/Portals' element={<Portals/>} />
    </Routes></div>
    </BrowserRouter> 
    </>
  )
}

export default App
