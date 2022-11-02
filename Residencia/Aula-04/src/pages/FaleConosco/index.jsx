import { Link } from "react-router-dom"

export const FaleConsoco = () =>{

    const contato = {
        id:1,
        nome:"Gbl",
        email:"gbl@gmail.com"
    }

    const contato2 = {
        id:2,
        nome:"Gblol",
        email:"gblol@gmail.com"
    }

    return(
        <>
        <div>
            <h1>CONTATOS☎</h1>

        </div>
        <button>
         <Link to={"/galeria"}>GALERIA🎬</Link>
        </button>
        <div>
            <button>
             <Link to={"/"}>HOME🏡</Link>
            </button>
        </div>
        <ol>
            <li><Link to={`/contatos/${contato.id}`} state={{ nome: contato.nome, id: contato.id }}>Gbl</Link></li>
            <li><Link to={`/contatos/${contato2.id}`} state={ contato }>Gblol</Link></li>
            <li><Link to="/contatos/3">Caroline</Link></li>
          </ol>
        </>
    )
}