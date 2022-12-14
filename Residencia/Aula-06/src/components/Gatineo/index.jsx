import { useEffect, useState } from "react";
import api from "../../services/Api";




const Gatineo = () =>{

  const [cat, setCat] = useState([]);

  const getCat = async () => {
    const { data } = await api.get("/images/search");
    setCat(data);
    console.log(data);
  };

  useEffect(() => {
    getCat();
  }, []);


    return(
        <>
      <h1>Use Effect</h1>
      <h1>{cat.length > 0 && cat[0].url}</h1>
      {cat.length > 0 ? (
        <img className='catImg' src={cat[0].url} alt="Gatinho" />
      ) : (
        <h1>Sem Imagem no momento</h1>
      )}
      <div>
      <button onClick={getCat}>Gerar gatineo</button>
      </div>
    </>
    )
}

export default Gatineo