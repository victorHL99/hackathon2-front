import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import './style.css'

import QuestionsIdsContext from "../../contexts/QuestionsIdsContext";

export default function Home() {

    const [themes, setThemes] = useState([])
    const [canRender, setCanRender] = useState(false)

    const { questionsIds, setQuestionsIds } = useContext(QuestionsIdsContext);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://brainkids.herokuapp.com/assuntos")
            .then((response) => {
                setThemes(response.data)
                setCanRender(true)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(questionsIds)

    const navigateToQuestion = (questions) =>{
        console.log(questions)
        setQuestionsIds(questions)
        navigate(`/perguntas/${questions[0]}`)
    }

    return (
        <div className='home-container'>
            <p>Seja bem-vindo(a) ao Brain Kids! O jeito divertido e eficaz de aprender matemática!</p>

            <h1>Escolha seu tema:</h1>
            {
                canRender && themes.map(item => {
                    return (
                        <div
                            className='theme-container'
                            key={item._id}
                            onClick={() => { 
                                navigateToQuestion(item.questoes)
                            }}
                        >
                            <span>{item.titulo}</span>
                        </div>
                    )
                })

            }

        </div>
    )
}