import { useState } from 'react'
import './App.css'
import LoginPage from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import { AuthProvider } from './Utils/AuthContext'

function App() {


  return (
    // <AuthProvider>
      <LoginPage />
    // </AuthProvider>
  )
}

export default App
