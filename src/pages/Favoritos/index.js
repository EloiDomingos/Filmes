import { useEffect, useState } from 'react';
import './favoritos.css';
import {toast} from 'react-toastify'

function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@dbfilmes");
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function excluirFilme(id){
        var filtroFilmes = filmes.filter((item)=>{
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);

        localStorage.setItem("@dbfilmes", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso !")
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes Favoritos</h1>

            {filmes.length === 0 && <span>Você não tem nenhum filme salvo !</span>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <a href={`/filme/${item.id}`}>Ver detalhes</a>
                                <button onClick={()=> excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;