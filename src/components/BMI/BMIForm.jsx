// BMIForm component

const BMIForm = ({ height, weight, setHeight, setWeight, onCalculate }) => {
  return (
    <div className="col-md-6">
      <h2 className="fw-bold mb-4">BMI Calculator</h2>
      <p className="fw-semibold">
        Contrary to popular belief, Lorem Ipsum is not simply random text...
      </p>
      <div className="d-flex gap-2 mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Your Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Your Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button className="btn btn-warning" onClick={onCalculate}>
        Calculate
      </button>
    </div>
  );
};

export default BMIForm;

