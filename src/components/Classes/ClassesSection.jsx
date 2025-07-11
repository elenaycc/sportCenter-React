// ClassesSection component

import { useState } from "react";
import ClassButtons from "./ClassButtons";
import ClassContent from "./ClassContent";

const ClassesSection = () => {
  const [activeClass, setActiveClass] = useState("yoga");

  return (
    <section id="classes" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-2">OUR CLASSES</h2>
        <div className="rounded-2 mb-4" style={{ width: "80px", borderBottom: "6px solid #f49c0f", margin: "0 auto" }}></div>
        <p className="mb-4 fw-semibold text-muted">
          Lorem Ipsum is not simply random text. It has roots in a piece of classical at <br />
          Hampden–Sydney College.
        </p>
        <ClassButtons activeClass={activeClass} setActiveClass={setActiveClass} />
        <ClassContent activeClass={activeClass} />
      </div>
    </section>
  );
};

export default ClassesSection;
