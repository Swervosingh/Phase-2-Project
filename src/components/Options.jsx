import React from "react";
import { useNavigate } from "react-router-dom";

const nbaTeams = [
  "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls",
  "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors",
  "Houston Rockets", "Indiana Pacers", "LA Clippers", "Los Angeles Lakers", "Memphis Grizzlies",
  "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks",
  "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers",
  "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"
];

export default function Options({ setChooseTeam }) {
  const navigate = useNavigate();

  function handleFilter(team) {
    setChooseTeam(team);
    navigate(`/quiz/${team}`);
  }

  return (
    <div className="SearchBar">
      <div className="buttonContainer">
        {nbaTeams.map(team => (
          <button key={team} value={team} onClick={() => handleFilter(team)}>
            {team}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search Teams"
        onChange={e => handleFilter(e.target.value)}
      />
    </div>
  );
}
