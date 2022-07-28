import CharCard from "../CharCard";
import "./styles.css";

function Characters({ characterList }) {
  return (
    <div className="container-character">
      <h1>Meus Personagens</h1>
      <div className="container-card">
        {characterList.map((character) => (
          <CharCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
}
export default Characters;
