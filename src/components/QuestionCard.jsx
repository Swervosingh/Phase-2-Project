import React, { useState } from "react";

export default function QuestionCard({ triviaObj }) {
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
        <div className="centeredContainer" style={{ backdropFilter: "blur(3px)" }}>
            <div className="questionCard" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "20px", borderRadius: "10px", color: "white", fontFamily: "Arial, sans-serif" }}>
                <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{triviaObj.team}</p>
                <p style={{ color: "white", fontSize: "16px" }}>{triviaObj.questions}</p>
                {triviaObj.possibleAnswer.map((answer, index) => (
                    <button
                        key={index}
                        disabled={didAnswerIsTrue}
                        style={{
                            borderRadius: "10px",
                            backgroundColor:
                                selectedAnswer === answer
                                    ? iscorrect
                                        ? "green"
                                        : "red"
                                    : "Black",
                            color: "white", // Text color is set to white
                            margin: "5px",
                            fontWeight: "bold" // Make the text bold
                        }}
                        onClick={handlePossibleAnswer}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
}



