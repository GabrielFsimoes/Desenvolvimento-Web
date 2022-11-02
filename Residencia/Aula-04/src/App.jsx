import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import {Galeria} from './pages/Galeria'
import {FaleConsoco} from "./pages/FaleConosco"
import ContatoDetalhes from "./pages/ContatoDetalhes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path='/galeria' element={<Galeria/>}/>
        <Route path="/contatos" element={ <FaleConsoco/> }/>
        <Route path="/contatos/:id" element={<ContatoDetalhes/> }/>

        <Route path="*" element={ <h1> <h1>Erro 404</h1> Pagina não Encontrada</h1> } />
    </Routes>
  )
}

export default App
