
const classData = {
  yoga: {
    title: "Why are your Yoga?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum sapiente nulla totam neque eum veniam.",
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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ducimus? Mollitia et quia rem sapiente harum reprehenderit, dolores est velit atque quasi nostrum praesentium a voluptas nihil dignissimos nulla! Saepe?",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque reiciendis accusantium, excepturi dignissimos architecto velit, dicta aperiam distinctio, quae illo facilis possimus ipsa debitis nulla nisi optio quaerat saepe?",
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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aliquid, praesentium omnis doloremque ipsam provident! Mollitia natus aperiam accusantium earum at unde corporis, error in magnam maxime eius obcaecati sit.",
    times: [
      "Saturday–Sunday: 8:00am – 10:00am",
      "Monday–Tuesday: 10:00am – 12:00pm",
      "Wednesday–Friday: 3:00pm – 6:00pm",
    ],
    image: "/src/public/images/stret.webp",
  },
};

const ClassContent = ({ active }) => {
  const data = classData[active];
if (!data) return null;
  return (
    <div className="class-content row align-items-center text-start">
      <div className="col-md-6">
        <h4 className="fw-bold mb-3">{data.title}</h4>
        <p>{data.description}</p>
        <h5 className="fw-bold mt-4">When comes {active} Your Time.</h5>
        <ul className="list-unstyled fw-semibold">
          {data.times.map((time, index) => (
            <li key={index} className="my-3">
              {time}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-6 text-center">
        <img src={data.image} className="img-fluid rounded" alt={active} />
      </div>
    </div>
  );
};

export default ClassContent;
