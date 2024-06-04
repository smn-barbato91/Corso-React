/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Grid from './components/Grid';

import '../index.css'
import SideBarSharedLayout from './layouts/SideBarSharedLayout';

function App() {

  return (
    <>
      <main className="vh-10">
        <Routes>
          <Route path="/" element={<SideBarSharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/employees" element={<Grid/>}/>

          </Route>
        </Routes>
        
      </main>     
    </>
  )
}

export default App;
