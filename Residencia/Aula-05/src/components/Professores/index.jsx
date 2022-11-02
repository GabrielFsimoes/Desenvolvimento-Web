function Professores(props){
    return(
        <div style={{backgroundColor: "#9dbac9", color: "#fff", textShadow: "3px 3px #ac8ebf" ,padding: "1px", margin:"5%" , borderRadius: "5%", boxShadow: "2px 5px 5px #c3d9e6"}}>
        <h2>Id: {props.professor.id}</h2>
        <h2> nome: {props.professor.nome}</h2>
        <h2>Materias: {props.professor.materias}</h2>
        <br/>
        </div>
    ) 
}

export default Professores