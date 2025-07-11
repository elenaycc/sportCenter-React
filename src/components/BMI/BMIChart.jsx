// BMIChart component

const BMIChart = ({ leftPos }) => {
  return (
    <div className="col-md-6 text-center">
      <h5 className="fw-semibold">Your BMI</h5>
      <div style={{ position: "relative", maxWidth: "500px", margin: "0 auto" }}>
        <img src="/src/public/images/bmi-index.jpg" className="img-fluid" alt="BMI Chart" />
        <div
          id="bmi-indicator"
          style={{
            position: "absolute",
            bottom: "-10px",
            left: `${leftPos}px`,
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "15px solid orange",
            transform: "rotate(180deg)",
            transition: "left 0.4s ease",
          }}
        />
      </div>
    </div>
  );
};

export default BMIChart;

