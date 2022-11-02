import './styles.css'

function Bio(props){
    return(
        <div className="bio">
            <h1> {props.texto}</h1>
            <button>Saiba Mais</button>
        </div>
    )
}

export default Bio