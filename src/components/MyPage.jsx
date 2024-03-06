import React from "react";
import Options from "./Options";
import QuestionPage from "./QuestionPage";
import { useState, useEffect } from "react";



export default function MyPage(){
    
    const[trivia, setTrivia]= useState([])
    const[chooseTeam, setChooseTeam]= useState([])
    
    useEffect(() => {
        fetch('http://localhost:4000/trivia')
        .then(response => response.json())
        .then(triviaData => {
            setTrivia(triviaData);
             console.log(trivia)
            })
         
    }, [])
    
    const filterTrivia= trivia.filter(trivia=>{return trivia.team.includes(chooseTeam)})
    return(
        <div>
            
            <QuestionPage filterTrivia={filterTrivia}/>
            <Options/>
        </div>
    )

}
