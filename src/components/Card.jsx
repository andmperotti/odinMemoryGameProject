import React from "react";
import "../styles/Card.css";

function Card({ teamAbbreviation, teamLogo, onClick }) {
  return (
    <section
      className="team-card"
      style={{
        backgroundImage: `url(${teamLogo})`,
      }}
      onClick={onClick}
    >
      {teamAbbreviation}
    </section>
  );
}

export { Card };
