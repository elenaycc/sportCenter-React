// BMISection component

import React, { useState } from "react";
import BMIForm from "./BMIForm";
import BMIChart from "./BMIChart";
import ResultDisplay from "./ResultDisplay";

const BMISection = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [leftPos, setLeftPos] = useState(0);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) {
      alert("Please enter valid height and weight!");
      return;
    }
    const bmiValue = w / (h / 100) ** 2;
    setBmi(bmiValue.toFixed(1));

    // Ok pozisyonu
    if (bmiValue < 18.5) setLeftPos(20);
    else if (bmiValue < 25) setLeftPos(120);
    else if (bmiValue < 30) setLeftPos(220);
    else if (bmiValue < 35) setLeftPos(320);
    else setLeftPos(420);
  };

  return (
    <section id="bmi" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <BMIForm
            height={height}
            weight={weight}
            setHeight={setHeight}
            setWeight={setWeight}
            onCalculate={calculateBMI}
          />
          <BMIChart leftPos={leftPos} />
        </div>
        <ResultDisplay bmi={bmi} />
      </div>
    </section>
  );
};

export default BMISection;
