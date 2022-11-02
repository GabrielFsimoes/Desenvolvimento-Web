//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import { useState } from 'react'
import './App.css'



//Variáveis no JS - podem guardar funções
//var - não usar, pode gerar problemas de escopo
//let - variável comum
//const - constante

//Funções
//Função Anônima = Não tem nome

import { useState } from 'react'


let funcao = function(){
  console.log("Funcao")
}

let funcao2 = () => console.log("Ora ora barece que temos um sherlock holmes ñ é mesmo")

function App() {
  const [contador, setContador] = useState(0)

//VERSAO ARROW FUNCTION
  // function App = () =>{
  //   const [contador, setContador] = useState(0)
  
  function clique() {
    let cont = contador +1
    setContador(cont)
  }
//ERRO NO VALOR - PROBLEMAS NA FILA DE EXECUÇÃO
    // setContador(contador + 1)
    // setContador(contador + 1)
    // setContador(contador + 1)
    
    // Assim funciona =)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)


  function zera(){
    setContador(0)
  }

  return(
    <>
      <h1>CONTADOR: {contador}</h1>
      <button onClick={clique}>CLIQUE AQUI</button>
      <button onClick={zera}>Zerar</button>
      <button onClick={funcao2}>Botão apenas pra devs mwahahahaha</button>
    </>
  )
}



export default App

//Exemplo do video

// import './App.css'

// import { useState } from 'react'
// //Gerenciar o estado de algum valor
// // getter e setter



// function App() {
//   const [name, setName] = useState("Gbl")
//   const [number, setNumber] = useState(1)

//   console.log(name)

//   const changeNumber = () => {
//     // Previous Value
//     setNumber((prevNumber) => prevNumber + 1);
//     setNumber((prevNumber) => prevNumber + 1);
//   }

//   return (
//     <>
//       <h2>Meu nome é: {name}</h2>
//       <input type="text" 
//       value={name} 
//       onChange={e => setName(e.target.value)} />
//       <div>
//         <p>Número: {number}</p>
//         <button onClick={changeNumber}>Mudar número</button>
//       </div>
//     </>
//   );
// }

// export default App
