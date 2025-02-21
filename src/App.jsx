import React from 'react'
import SignUp from './Pages/SignUp';
import { Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import NavBar from './Components/ui/NavBar';
import Pharmacy from './Pages/pharmacie/Pharmacy';
import Myaccount from './Pages/Account/Myaccount';
import  Emergency  from './Pages/Emergency/Emergency';
function App() {
  return (
    <div>
      <NavBar />
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pharmacy' element={<Pharmacy />} />
        <Route path='/emergency' element={<Emergency />} />
        <Route path='/account' element={<Myaccount />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
