import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header"
import Home from "./components/Home";
import Theme from "./components/Theme";
import Success from "./components/Success"

import QuestionsIdsContext from "./contexts/QuestionsIdsContext";
import SuccessContext from "./contexts/SuccessContext"

export default function App() {

    const [success, setSuccess] = useState([]);
    const [questionsIds, setQuestionsIds] = useState([])

    return (
        <div className="content">
            <QuestionsIdsContext.Provider value={{ questionsIds, setQuestionsIds }}>
                <SuccessContext.Provider value={{ success, setSuccess }}>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/perguntas/:id' element={<Theme />}></Route>
                            <Route path='/sucesso' element={<Success />}></Route>
                        </Routes>
                    </BrowserRouter>
                </SuccessContext.Provider>
            </QuestionsIdsContext.Provider>

        </div >
    );
}