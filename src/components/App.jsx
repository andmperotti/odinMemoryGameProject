import { useState } from "react";
import "../styles/App.css";
import { shuffle } from "../assets/functions";
import { Card } from "./Card";

let mlbData = await fetch(
  "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams",
).then((result) => result.json());
let mlbTeams = mlbData.sports[0].leagues[0].teams;

shuffle(mlbTeams);

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedTeams, setClickedTeams] = useState([]);

  function scoreChange(teamAbb) {
    if (!clickedTeams.includes(teamAbb)) {
      setClickedTeams([...clickedTeams, teamAbb]);
      setCurrentScore(currentScore + 1);
    } else {
      setBestScore(currentScore);
      setCurrentScore(0);
      setClickedTeams([]);
    }
  }

  return (
    <section className="app-output">
      <h1>MLB Memory Game</h1>
      <p>
        Click on different team logos in a row to increase your score, clicking
        a previously clicked logo will reset your score. Also refreshing will
        reset your current score and best score.
      </p>
      <strong>
        <p>Current Score: {currentScore}</p>
      </strong>
      <strong>
        <p>Best Score: {bestScore}</p>
      </strong>
      <section className="team-container">
        {mlbTeams.map((teamObj) => (
          <Card
            className="team-card"
            teamAbbreviation={teamObj.team.abbreviation}
            key={teamObj.team.abbreviation}
            teamLogo={teamObj.team.logos[0].href}
            onClick={(e) => {
              e.preventDefault();
              scoreChange(e.target.textContent);
              shuffle(mlbTeams);
            }}
          />
        ))}
      </section>
    </section>
  );
}

export default App;
