// ResultDisplay component

const ResultDisplay = ({ bmi }) => {
  if (!bmi) return null;
  return <p className="fw-bold mt-3 text-success text-center">Your BMI is {bmi}</p>;
};

export default ResultDisplay;

