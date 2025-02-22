import React from 'react'
import SignUp from './Pages/Account/SignUp';
import { Route,Routes } from 'react-router-dom';
import Login from './Pages/Account/Login';
import HomePage from './Pages/HomePage';
import NavBar from './Components/ui/NavBar';
import Pharmacy from './Pages/pharmacie/Pharmacy';
import Myaccount from './Pages/Account/Myaccount';
import  Emergency  from './Pages/Emergency/Emergency';
import PharmacieList from './Pages/pharmacie/PharmacieList';
function App() {
  return (
    <div>
      <NavBar />
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pharmacy' element={<PharmacieList />} />
        <Route path='/emergency' element={<Emergency />} />
        <Route path='/account' element={<Myaccount />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
