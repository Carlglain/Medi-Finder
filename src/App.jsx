import React from 'react'
import SignUp from './Pages/SignUp';
import { Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import NavBar from './Components/ui/NavBar';
function App() {
  return (
    <div>
      <NavBar />
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
