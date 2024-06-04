/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';

import '../index.css'
import SideBarSharedLayout from './layouts/SideBarSharedLayout';

function App() {

  return (
    <>
      <main className="vh-100">
        <Routes>
          <Route path="/" element={<SideBarSharedLayout/>}>
            <Route index element={<Home/>}/>

          </Route>
        </Routes>
        
      </main>     
    </>
  )
}

export default App;
