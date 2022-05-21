import './style.css'
import {  useContext } from "react";

import SuccessContext from "../../contexts/SuccessContext";


export default function Success(){

    const { success } = useContext(SuccessContext);

    const calculaResultado = () =>{
        const respostasCertas = success.filter(item => item[0]===item[1]).length
        return `${respostasCertas}/${success.length}`
    }

    return (
        <div className='success-container'>
            <h1>Parabéns!!</h1>
            <p className='message'>Você mandou muito bem!</p>

            <p className='success'>Acertos:</p>
            <span>{calculaResultado()}</span>

            <div className='buttons'>
                <button>Tentar novamente</button>
                <button>Home</button>
            </div>
        </div>
        )
}