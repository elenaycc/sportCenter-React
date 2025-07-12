// TrainerList component

import TrainerCard from "./TrainerCard";

const trainers = [
  {
    name: "Emma Fit",
    title: "HIIT Instructor",
    image: "/images/trainer1.jpg",
  },
  {
    name: "John Strong",
    title: "Power Lifting Coach",
    image: "/images/trainer2.jpg",
  },
  {
    name: "Jane Doe",
    title: "Cardio Trainer",
    image: "/images/trainer3.jpg",
  },
];

const TrainerList = () => {
  return (
    <div className="row justify-content-center g-4">
      {trainers.map((trainer, index) => (
        <div className="col-md-4" key={index}>
          <TrainerCard {...trainer} />
        </div>
      ))}
    </div>
  );
};

export default TrainerList;

