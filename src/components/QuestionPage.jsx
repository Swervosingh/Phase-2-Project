import React from "react";
import QuestionCard from "./QuestionCard";


export default function QuestionPage({filteredArray}) { 
    return ( 
        <div>
            {filteredArray.map(trivia => <QuestionCard key={trivia.id} triviaObj={trivia}/>)}
        </div>
    )
}


// function QuestionPage({filterTrivia}){


//     return(
    
//         <div>
           
//            {filterTrivia.map(trivia => (
//                 <QuestionCard key={trivia.id} triviaObj={trivia} />
//             ))}
            

//         </div>
//     )

// }

// export default QuestionPage
