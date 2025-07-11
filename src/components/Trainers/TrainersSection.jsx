// TrainersSection component

import TrainerList from "./TrainerList";

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-5" style={{ backgroundColor: "#f1f6fb" }}>
      <div className="container text-center">
        <h2 className="fw-bold">OUR BEST TRAINERS</h2>
        <div
          className="rounded-2 mb-4"
          style={{
            width: "80px",
            borderBottom: "6px solid #f49c0f",
            margin: "0 auto",
          }}
        ></div>
        <p className="text-muted mb-5">
          Lorem Ipsum is not simply random text. It has roots in a piece of classical at <br />
          Hampden–Sydney College.
        </p>
        <TrainerList />
      </div>
    </section>
  );
};

export default TrainersSection;
