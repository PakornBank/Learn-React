import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hello from './Hello.jsx'
import Fav from './Fav.jsx'
import Convert from './Convert.jsx'
import Buttons from './Buttons.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello />
    <Fav />
    <Convert></Convert>
    <Buttons></Buttons>
  </React.StrictMode>,
)
