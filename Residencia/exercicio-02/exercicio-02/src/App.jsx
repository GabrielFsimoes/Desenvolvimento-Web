import './App.css'

import { useState } from 'react'


//Gerenciar o estado de algum valor
// getter e setter

function App() {
  const [number, setNumber] = useState(0)
  const [valor, setValor] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)
  const [meta, setMeta] = useState(0)
  const [metaRestante, setMetaRestante] = useState(0)
  const [mensagem, setMensagem] = useState("Beba Água")
  const [registro, SetRegistro] = useState("")
  const date = new Date().toLocaleString()


  const calculo = () => {
    setValorTotal(valorTotal + parseFloat(valor));
  }
  const changeNumber = () => {
    if (valor >= 1 && meta > 0) {
      setNumber(number + 1);
      calculo();
      SetRegistro(`Copo bebido as: ${date} ${registro}`);
      alerta();
      calculaMeta();
      
    } else {
      alert("Não é possivel ter valores nulos ou negativos")
    }
  }

  const calculaMeta = () =>{
    if(valorTotal >= meta){
      setMetaRestante(0)
    } else{
      setMetaRestante(meta - valorTotal)
    }
  }

  const alerta = () => {
    if ((valorTotal + parseFloat(valor)) >= meta) {
      return setMensagem("Parabéns você atingiu a meta de hoje!");
    }
  }

  const zerar = () => {
    setNumber(0);
    setValorTotal(0);
    SetRegistro("")
    setMensagem("Beba Água")
    setMetaRestante(0)
  }

  return (
    <>
      <div id='titulo'>
        <div>
          <h2>{mensagem}</h2>
        </div>
      </div>

      <div id='valores'>
        <div id='meta'>
          <img id='iconMeta' src="/src/assets/bandeira.svg" alt="icon Meta" />
          <h2>Objetivo:</h2>
          <div> <h2>{meta}</h2>
          </div>
        </div>
        <div id='info'>
          <h2>Copos de água consumidos: </h2>
          <div> <h2>{number}</h2></div>
          <h2>{valorTotal} ml de água ingeridos!</h2>
          <div>
            <button onClick={changeNumber}>Adicionar 1 copo</button>
          </div>
          <button onClick={zerar}>Reiniciar Contador</button>
        </div>
        <div>
          <img id='iconGota' src="/src/assets/goto.svg" alt="water icon" />
          <h2>{metaRestante}Ml Restantes</h2>
        </div>
      </div>
      <main>
        <div id='coluna1'>
          <form>
            <label>
              <h2>
                Informe quantos ml tem 1 copo:
              </h2>
              <input type="number" placeholder='0 ml'
                value={valor}
                onChange={e => setValor(e.target.value)} />
              <div>
                <h2>Meta diaria de consumo:</h2>
                <input type="number" placeholder='0 ml'
                  value={meta}
                  onChange={e => setMeta(e.target.value)} />
              </div>
            </label>
          </form>
        </div>

        <div id='coluna2'>
          <div id='historico'>
            <div>
              <h1>Historico:</h1>
            </div>
            <div id='registro'>
            <h3>{registro}</h3>
            </div>
            <div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App
