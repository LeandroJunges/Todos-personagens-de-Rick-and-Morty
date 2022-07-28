import "./styles.css";

function CharCard({ name, image }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </div>
  );
}
export default CharCard;
