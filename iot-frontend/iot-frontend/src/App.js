// src/App.js
import React from 'react'

import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import './styles/main.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App

