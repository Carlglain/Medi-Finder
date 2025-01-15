import React from 'react'
import SignUp from './Pages/SignUp';
import { Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import MediLogo from './Components/MediLogo'
function App() {
  return (
    <div>
      
     <MediLogo />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
