// ClassContent component

import ClassCard from "./ClassCard";

const classData = {
  yoga: {
    title: "Why are your Yoga?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus...",
    timeTitle: "When comes Yoga Your Time.",
    times: [
      "Saturday–Sunday: 8:00am – 10:00am",
      "Monday–Tuesday: 10:00am – 12:00pm",
      "Wednesday–Friday: 3:00pm – 6:00pm",
    ],
    image: "/src/public/images/yoga.jpg",
  },
  group: {
    title: "Why are your Group?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ducimus?...",
    timeTitle: "When comes Group Your Time.",
    times: [
      "Monday–Tuesday: 10:00am – 12:00pm",
      "Wednesday–Friday: 3:00pm – 6:00pm",
      "Saturday–Sunday: 8:00am – 10:00am",
    ],
    image: "/src/public/images/group.webp",
  },
  solo: {
    title: "Why are your Solo?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque reiciendis...",
    timeTitle: "When comes Solo Your Time.",
    times: [
      "Wednesday–Friday: 3:00pm – 6:00pm",
      "Saturday–Sunday: 8:00am – 10:00am",
      "Monday–Tuesday: 10:00am – 12:00pm",
    ],
    image: "/src/public/images/solo.jpg",
  },
  stretching: {
    title: "Why are your Stretching?",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aliquid...",
    timeTitle: "When comes Stretching Your Time.",
    times: [
      "Saturday–Sunday: 8:00am – 10:00am",
      "Monday–Tuesday: 10:00am – 12:00pm",
      "Wednesday–Friday: 3:00pm – 6:00pm",
    ],
    image: "/src/public/images/stret.webp",
  },
};

const ClassContent = ({ activeClass }) => {
  const content = classData[activeClass];

  return (
    <div className="class-content active row align-items-center text-start">
      <ClassCard content={content} />
    </div>
  );
};

export default ClassContent;
