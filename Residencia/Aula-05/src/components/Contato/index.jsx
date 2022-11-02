//Criar um array de 3 contatos no App.jsx contendo { id, nome, email } 
//Componente contato recebe 1 contato via props
//Exibir Informações do Contato na tela
//Chamar componente Contato lá no JSX do App.jsx

function Contato(props){
        return(
            <div style={{backgroundColor: "#9dbac9", color: "#fff", textShadow: "3px 3px #ac8ebf" ,padding: "1px", margin:"5%" , borderRadius: "5%", boxShadow: "2px 5px 5px #c3d9e6"}}>
            <h2>Id: {props.contato.id}</h2>
            <h2> nome: {props.contato.nome}</h2>
            <h2>email: {props.contato.email}</h2>
            <br/>
            </div>
        ) 
}

export default Contato