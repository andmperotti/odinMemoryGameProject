import { useState } from "react";
import "../styles/App.css";
import {shuffle} from '../assets/functions'

let mlbData = await fetch(
  "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams"
).then((result) => result.json());
let mlbTeams = mlbData.sports[0].leagues[0].teams;

shuffle(mlbTeams);

function App() {
 

  return (

  );
}

export default App;
