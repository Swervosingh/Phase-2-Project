import React from "react";
import QuestionCard from "./QuestionCard";
import { useOutletContext } from "react-router-dom";


export default function QuestionPage() { 
    const {filteredArray} = useOutletContext()
    return ( 
        <div className="QuestionsContainer">
            { filteredArray.map(trivia => <QuestionCard key={trivia.id} triviaObj={trivia}/>)}
           
        </div>
    )
}


