//Criar um novo componente e importar main.jsx
//Criar um input para salvar o nome da pessoa
//Criar um input para salvar a idade da pessoa
//Criar um botão para executar uma função
//A Função deve verificar se a idade da pessoa é menor que 18 anos ou maior
//Mostrar na tela: "Olá fulano, você é menor/ou maior de idade";

import { useState } from "react";
import './style.css'

const Maioridade = () => {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [menssagem, setMensagem] = useState("")

    const handleMaioridade = () => {
        if (idade < 0) {
            setMensagem(`Olá ${nome}, não é possivel ter idade negativa!`)
        } else if(idade == 0){
            setMensagem(`Olá ${nome},  não é possivel ter idade nula!`)
            console.log("Menor de Idade");
        } else if(idade < 18){
            setMensagem(`Olá ${nome}, você é menor de idade!`)
            console.log("Menor de Idade");
        }
        else {
            setMensagem(`Olá ${nome}, você é maior de idade`)
          console.log("Maior de Idade");
        }
    }

    return (
        <div id="main">
            <h1>Verificação de maioridade penal</h1>

            <div id="form">
            <p>Digite seu nome:</p>    
            <input type="text" placeholder="Digite seu nome..." value={nome}  
                onChange={e => setNome(e.target.value)} />

            <p>Digite sua idade:</p> 
            <input type="number" value={idade} placeholder="Digite sua idade..."
                onChange={e => setIdade(e.target.value)} />
            </div>


            <div style={{ marginTop: 20 }}>
                <input id="botao" type="button" value="ENVIAR" onClick={handleMaioridade} />
            </div>

            <h2>{menssagem}</h2>

        </div>
    )
}

export default Maioridade