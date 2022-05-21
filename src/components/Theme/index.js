import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./style.css";

export default function Theme(){
    // const { idTema } = useParams();
    // const [alternatives, setAlternatives] = useState([]);

    const respostas = [
        {id: 1 , conteudo: "3"},
        {id: 2 , conteudo: "4"},
        {id: 3 , conteudo: "5"},
        {id: 4 , conteudo: "6"}
    ];

    // useEffect(() => {
    //     const promise = axios.get(`https://brainkids.herokuapp.com/questoes`);
        
    //     // Em caso de sucesso
    //     promise.then(response => {
    //         // setSessions(response.data);
    //         console.log(response.data)
    //     });
    //     //Em caso de falha
    //     promise.catch(error => {
    //         console.log("Status code: " + error.response.status);
    //         console.log("Opa! Ocorreu um erro: " + error.response.data);
    //     });
    // }, []);
    
    return(
        <div className="questions-container">
            <h1>Quanto é 2 + 2?</h1> {/* Aqui vai ficar qual é a pergunta (ex.: "Quanto é 2+2?") */}

            <div className="alternatives-container">
                {respostas.map(e => (
                    <span key={e.id}> {e.conteudo} </span>
                ))}
            </div>
        </div>
    );
}