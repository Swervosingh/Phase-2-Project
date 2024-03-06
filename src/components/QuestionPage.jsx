import React from "react";
import QuestionCard from "./QuestionCard";
import ScoreCard from "./ScorePage"

function QuestionPage({filterTrivia}){

    filterTrivia.map(trivia => <QuestionCard key={trivia.id}triviaObj={trivia}/>)

    return(
    
        <div>
           
           {/* {filteredArray.map(trivia => <QuestionCard key={trivia.id} triviaObj={trivia} /> )} */}
            

        </div>
    )

}

export default QuestionPage
