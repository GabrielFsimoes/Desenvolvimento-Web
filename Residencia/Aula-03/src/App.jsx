
// import { useState } from 'react'
// // import './App.css'
// import 

// function App() {

//   const [textoDigitado, SetTextoDigitado] = useState("AMONGUS")

//   const handleText = () => {
//     console.log("passar o texto ak")
//   }

//   const handleTextDigitado = (texto) =>{
//     // SetTextoDigitado(texto)
//     SetTextoDigitado(texto.target.value)
//   }

//   return (
//     <>
//      <h1>Inputs Controlados</h1>
//      <h2>Programadores são: {textoDigitado}</h2>
//      <input type="text"
//       placeholder='Digite aqui meu consagrado' 
//     //  onChange={e => SetTextoDigitado(e.target.value)}/>
//     //  onChange={e => handleTextDigitado(e.target.value)}/>
//      onChange={handleTextDigitado}
//     value={textoDigitado}
//      />
//      <button onClick={handleText}>Enviar</button>
//     </>
//   )

// }

// export default App

import { useState } from "react";
import "./App.css";

function App() {
  const [textoDigitado, setTextoDigitado] = useState("Informação no State");

  const handleText = () => {
    console.log("Passar o texto digitado");
  };

  const handleTextoDigitado = (e) => {
    console.log(e.target.value);
    setTextoDigitado(e.target.value);
  };

  return (
    <>
      <h1>Inputs Controlados</h1>
      <h2>Informação digitada: {textoDigitado}</h2>
      <input
        type="text"
        placeholder="DIGITE SEU TEXTO AQUI"
        // onChange={e => setTextoDigitado(e.target.value)}
        // onChange={e => handleTextoDigitado(e.target.value)}
        onChange={handleTextoDigitado}
        value={textoDigitado}
      />
      <button onClick={handleText}>Enviar</button>
    </>
  );
}

export default App;
