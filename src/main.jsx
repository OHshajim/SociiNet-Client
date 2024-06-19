import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Home />
    </AuthProvider>
  </React.StrictMode>,
)
