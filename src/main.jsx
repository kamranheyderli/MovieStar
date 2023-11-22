import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// scss
import "./styles/main/main.scss"
// router
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>


)
