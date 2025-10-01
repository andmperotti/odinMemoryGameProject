import "../styles/card.css";

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
