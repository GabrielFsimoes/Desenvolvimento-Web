import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contato from './components/Contato'
import Professores from './components/Professores'

function App() {
  
const nome = "João"
const nome2 = "Carlos"
const nome3 = "Amanda"

  const nomes = ["João", "Carlos", "Amanda"]

  // nomes.forEach((item, index) => {
  //   if(index > 1)return
  //     console.log(index);
  //     console.log(item);
  // })

  // const novoArray = nomes.map(nome, index) =>{
  //   if(index)
  // }


  const coisas = ["Pedro", null, true]

  // const arrayDeObjetos = [
  //   { nome: "João", id: 1, materias: ["Web", "Mobile"]},
  //   { nome: "Carlos", id: 2},
  //   { nome: "Amanda", id: 3}
  // ]

  const contatos = [
    {  id: 1, nome: "Power",  email: "power@gmail.com"},
    {id: 2,  nome: "Denji",  email: "denji@gmail.com"},
    { id: 3,  nome: "Pochita",  email: "pochita@gmail.com"}
  ]

  const profesores = [
    {  id: 1, nome: "Tearju Lunatique Sensei",  materias: ["Ciências, ", "Química, ", "Biologia"]},
    {id: 2,  nome: "Senku", materias: ["Ciências, ", " Química,", " Astrologia"]},
    { id: 3,  nome: "Sarutobi Asuma Sensei", materias: ["Taijutsu, ", "F1, ", "Ir de base"]}
  ]

  // const renderizaNomes = () => {
  //   nomes.map( (item, index) => {
  //     return <h1 key={index}>{item}</h1>
  //   })
  // }

  // console.log(nomes)
  // console.log(nomes.length)
  // console.log(nomes[0])

  // console.log(arrayDeObjetos)
  // console.log(arrayDeObjetos[0].nome)
  // console.log(arrayDeObjetos[0].materias[0])

//Criar Array de professores que vai conter ( id, nome arrayMaterias[3])


  return (
        <>
            {/* {contatos.map((item) => {
          return <Contato contato={item} key={item.id}/>
           })} */}
            {profesores.map((item) => {
          return <Professores professor={item} key={item.id}/>
           })}
        </>
  )
}

export default App
