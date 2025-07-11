// TrainerCard component
const TrainerCard = ({ name, title, image }) => {
  return (
    <div
      className="trainer-card position-relative overflow-hidden border border-3 rounded-3"
      style={{ borderColor: "#355592", cursor: "pointer", transition: "transform 0.3s ease" }}
    >
      <img src={image} className="img-fluid" alt={name} />
      <div
        className="trainer-info text-white text-center"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(53, 85, 146, 0.9)",
          padding: "15px 0",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <h5 className="mb-1">{name}</h5>
        <small>{title}</small>
      </div>
    </div>
  );
};

export default TrainerCard;

