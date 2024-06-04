/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Grid from './components/Grid';

import '../index.css'
import SideBarSharedLayout from './layouts/SideBarSharedLayout';
import GridLayout from './layouts/GridLayout';
import FormEm from './components/FormEm';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<SideBarSharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/employees" element={<GridLayout/>}>
              <Route path=":employeesId" element={<FormEm/>}/>
            </Route>
          </Route>
        </Routes>
        
      </main>     
    </>
  )
}

export default App;
