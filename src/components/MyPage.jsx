
import React, { useState, useEffect } from "react";
import Options from "./Options";
import Home from "./Home";
import { Outlet } from "react-router-dom";

export default function MyPage() {
    const [trivia, setTrivia] = useState([]);
    const [chooseTeam, setChooseTeam] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/trivia")
            .then((res) => res.json())
            .then((triviaData) => setTrivia(triviaData));
    }, []);

    const filteredArray = trivia.filter((trivia) => {
        if (chooseTeam !== "") {
            return trivia.team.toLowerCase().includes(chooseTeam.toLowerCase());
        }
    });

    return (
        <div className="main-page" style={{ backgroundImage: 'url("https://s.yimg.com/ny/api/res/1.2/14RrtHYhPwtBAKf2hnp5DA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/hoops_hype_usa_today_sports_articles_974/5f654dc40ac11692c6d5b6fd2fdbd2b6")', backgroundSize: "cover", minHeight: "100vh" }}>
            <Home />
            <Options setChooseTeam={setChooseTeam} />
            <Outlet context={{ filteredArray }} />
        </div>
    );
}

