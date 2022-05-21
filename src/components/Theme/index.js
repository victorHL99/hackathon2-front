import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import SuccessContext from "../../contexts/SuccessContext";

import "./style.css";

export default function Theme() {
    const { id } = useParams();
    const [alternatives, setAlternatives] = useState([]);

    const { success, setSuccess } = useContext(SuccessContext);

    /*const respostas = [
        {id: 1 , conteudo: "3"},
        {id: 2 , conteudo: "4"},
        {id: 3 , conteudo: "5"},
        {id: 4 , conteudo: "6"}
    ];*/

    useEffect(() => {
        const promise = axios.get(`https://brainkids.herokuapp.com/questoes/${id}`);

        // Em caso de sucesso
        promise.then(response => {
            setAlternatives(response.data);
            console.log(response.data)
        });
        //Em caso de falha
        promise.catch(error => {
            console.log("Status code: " + error.response.status);
            console.log("Opa! Ocorreu um erro: " + error.response.data);
        });
    }, [id]);
    console.log(alternatives)

    return (
        <div className="questions-container">
            {
                alternatives.map(item => {
                    return (
                        <>
                            <h1>{item.enunciado}</h1> 

                            <div className="alternatives-container">
                                {item.alternativas.map(e => (
                                    <span 
                                    key={e.id}
                                    onClick={()=> setSuccess(...success, [e.id, item.resposta])}
                                    > {e.conteudo} </span>
                                ))}
                            </div>
                        </>
                    )
                })
            }

        </div>
    );
}