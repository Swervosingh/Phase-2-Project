
import React, { useState } from "react";


export default function QuestionCard({triviaObj}) { 

    const [iscorrect, setiscorrect] = useState(false);
    const [didAnswerIsTrue, setDidAnswerIsTrue] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    function handlePossibleAnswer(e) {
        if (!didAnswerIsTrue) {
            const selectedText = e.target.textContent;
            setSelectedAnswer(selectedText);
            

            if (triviaObj.correctAnswer === selectedText) {
                setDidAnswerIsTrue(true);
                setiscorrect(true);
                console.log("I am correct!");
            } else {
                setDidAnswerIsTrue(true);
                setiscorrect(false);
                console.log("Am I correct?");
            }
        }
    }
    
    return ( 
        <div className="centeredContainer">
            <div className="questionCard" >
            <p>{triviaObj.team}</p>
            <p>{triviaObj.questions}</p>
            {triviaObj.possibleAnswer.map((answer, index) => ( 
            <button 
                key={index}
                disabled={didAnswerIsTrue}
                style={{borderRadius:"10px", 
                    backgroundColor: selectedAnswer === answer
                        ? (iscorrect ? "green" : "red")
                        : "yellow",
                }}
                onClick={handlePossibleAnswer}
            >
                {answer}
                

                </button>
            ))

}
</div>         


        </div>
    )
}