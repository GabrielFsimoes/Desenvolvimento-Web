import { Link } from "react-router-dom"

const Home = () =>{
    return(
        <>
        <div>
         <h1>HOME🏡</h1>
        </div>
        <button>
        <Link to={"/contatos"}>CONTATOS☎</Link>
        </button>
        <div>
        <button>
        <Link to={"/galeria"}>GALERIA🎬</Link>
        </button>
        </div>
        </>

    )
}

export default Home