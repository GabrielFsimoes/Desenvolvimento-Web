import './App.css'
import Gatineo from './components/Gatineo';


// function App() {
  // const [nome, SetNome] = useState("Gbl")
  // const [idade, SetIdade] = useState(19)
  

  // //Só é executado apos o componente ser renderizado
  // useEffect( () =>{
  //   console.log("Estou dentro do use Efect")
  // }, [nome, idade])
  
  // console.log(nome);

  // const asyncRequest = () =>{
  //   console.log("primeiro")
  //   //await - faz a execução
  //   console.log("segumdo")
  //   console.log("terceiro")
  // }

//   return (
//     <div className="App">
//      <button onClick={() => SetNome("Gunner")}>Clique</button>
//      <button onClick={() => SetIdade(idade +1)}>Incrementar idade</button>
//     </div>
//   )
// }

// export default App


//Consumindo Api
function App() {
  // const [cat, setCat] = useState([]);

  // const getCat = async () => {
  //   const { data } = await api.get("/images/search");
  //   setCat(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getCat();
  // }, []);


  // Função assíncrona dentro do useEffect
  // useEffect(() => {
  //   const getCat = async() => {
  //     const { data } = await api.get("/images/search")
  //     console.log(data)
  //   }
  //   getCat();
  // },[])

  return (
    <>
    <Gatineo/>
    </>
  );
}

export default App;
