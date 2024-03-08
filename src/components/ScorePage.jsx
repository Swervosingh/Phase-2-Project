import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ScorePage() {
    const location = useLocation();
    const score = location.state.score;

    return (
        <div>
            <h1>Quiz Completed!</h1>
            <h2>Your Score: {score}</h2>
            <Link to="/">Go back to homepage</Link>
        </div>
    );
}

export default ScorePage;
