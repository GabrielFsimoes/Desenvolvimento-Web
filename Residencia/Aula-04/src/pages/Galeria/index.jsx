import { Link } from "react-router-dom"

export function Galeria(){
    return(
        <>
        <div>
         <h1>Galeria 🎬</h1>
        </div>
        <button>
        <Link to={"/contatos"}>CONTATOS ☎</Link>
        </button>
        <div>
        <button>
        <Link to={"/"}>HOME🏡</Link>
        </button>
        </div>
        
        </>

    )
}
