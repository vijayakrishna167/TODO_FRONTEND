import React from 'react'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import { useState,createContext } from 'react'
import Home from './components/Home'

export const store= createContext()
const App = () => {
  const [token,setToken]=useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
      <Navbar/>
      {/* <Home/> */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App