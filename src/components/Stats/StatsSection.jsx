// StatsSection component

import StatBox from "./StatBox";

const stats = [
  { value: 325, label: "Course" },
  { value: 405, label: "Work Out" },
  { value: 305, label: "Working Hour" },
  { value: 705, label: "Happy Client" },
];

const StatsSection = () => {
  return (
    <section className="stats-section py-5">
      <div className="container">
        <div className="row g-4">
          {stats.map((item, index) => (
            <div className="col-md-3" key={index}>
              <StatBox value={item.value} label={item.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

