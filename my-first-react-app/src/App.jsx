import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello.jsx'
import Fav from './Fav.jsx'
import Convert from './Convert.jsx'
import Buttons from './Buttons.jsx'
import RandomPokemon from './components/RandomPokemon.jsx'
import Slots from './components/Slots.jsx'

function App() {

  return (
    <>
      <Slots></Slots>
    </>
  )
}

export default App


/* <h1>React Demo</h1>

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
    <Buttons></Buttons> */