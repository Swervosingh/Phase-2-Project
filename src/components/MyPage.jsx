import React from "react";
import Options from "./Options";
import QuestionPage from "./QuestionPage";
import { useState, useEffect } from "react";





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
        <div>

            <QuestionPage filteredArray={filteredArray}/>   
            
            <Options setChooseTeam={setChooseTeam} />

        </div>
    )
}

