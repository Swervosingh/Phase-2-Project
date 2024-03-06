import React from "react";
// import { useNavigate } from "react-router-dom";

function QuestionCard(triviaObj){
    
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
    
    
    return(
        <div className="card" style={{ border: "solid #ebf4f1" }}>
            <p>{triviaObj.category}</p>
            <p>{triviaObj.difficulty}</p>
            <p>{triviaObj.questions}</p>
            {triviaObj.possibleAnswers.map((answer, index) => (
                <button
                    key={index}
                    disabled={didAnswerIsTrue}
                    style={{
                        backgroundColor: selectedAnswer === answer
                            ? (iscorrect ? "green" : "red")
                            : "grey",
                    }}
                    onClick={handlePossibleAnswer}
                >
                    {answer}
                </button>
            ))}
        </div>
    );
}

export default QuestionCard

