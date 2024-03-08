import React from "react";
import Options from "./Options";
import Home from "./Home"; 
import QuestionPage from "./QuestionPage";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";





export default function MyPage() { 

    const [trivia, setTrivia] = useState([])
    const [chooseTeam, setChooseTeam] = useState("")
    

    useEffect(() => { 
        fetch('http://localhost:4000/trivia')
        .then(res => res.json())
        .then(triviaData => setTrivia(triviaData))
    },[])

    


    const filteredArray = trivia.filter(trivia => {
      if(chooseTeam!== ''){
      return trivia.team.toLowerCase().includes(chooseTeam.toLowerCase())}
    })
    
    return ( 
        <div className="main-page">
            <Home />
            <Options setChooseTeam={setChooseTeam} />
            <Outlet context={{filteredArray}}/> 

            {/* <QuestionPage filteredArray={filteredArray}/>    */}
            
            

        </div>
    )
}