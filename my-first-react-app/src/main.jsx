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
    <h1>React Demo</h1>

    <h2>My first jsx! &#x2193; &#x2193;
    &#x2193;
    </h2>
    <Hello />

    <h2>Creating a list of my favorite foods &#x2193;
&#x2193;
&#x2193;
</h2>
    <Fav />

    <h2>Convert HTML to jsx &#x2193;
&#x2193;
&#x2193;
</h2>
    <Convert />

    <h2>React state &#x2193;
&#x2193;
&#x2193;
</h2>
    <Buttons></Buttons>
  </React.StrictMode>,
)
