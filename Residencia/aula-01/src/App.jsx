import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Titulo from './components/titulo'
import Paragrafo from './components/Paragrafo'

function App() {

  return (
    <>
    <Titulo frase="eu sou umm titulo" cor="red"/>
    <Titulo frase="eu sou umm titulo tambem"/>

    <Paragrafo/>
    </>

  )
}
export default App 


//CRIAR UM COMPNENTE DE PARAGRAFO