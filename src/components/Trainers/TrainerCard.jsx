// TrainerCard component
const TrainerCard = ({ name, title, image }) => {
  return (
    <div
      className="trainer-card position-relative overflow-hidden border border-3 border-warning rounded-3"
      style={{ borderColor: "#355592", cursor: "pointer", transition: "transform 0.3s ease" }}
    >
      <img src={image} className="img-fluid" alt={name} />
      <div
        className="trainer-info text-white text-center"
      >
        <h5 className="mb-1">{name}</h5>
        <small>{title}</small>
      </div>
    </div>
  );
};

export default TrainerCard;

