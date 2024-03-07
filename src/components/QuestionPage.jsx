import React from "react";
import QuestionCard from "./QuestionCard";


export default function QuestionPage({filteredArray}) { 
    return ( 
        <div className="QuestionsContainer">
            { filteredArray.map(trivia => <QuestionCard key={trivia.id} triviaObj={trivia}/>)}
        </div>
    )
}


