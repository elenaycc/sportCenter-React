// StatBox component

const StatBox = ({ value, label }) => {
  return (
    <div className="stat-box p-4 text-center">
      <h2>{value}</h2>
      <p className="fw-bold">{label}</p>
    </div>
  );
};

export default StatBox;

