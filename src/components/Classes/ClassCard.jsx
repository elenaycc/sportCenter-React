// ClassCard component

const ClassCard = ({ content }) => {
  return (
    <>
      <div className="col-md-6">
        <h4 className="fw-bold mb-3">{content.title}</h4>
        <p>{content.description}</p>
        <h5 className="fw-bold mt-4">{content.timeTitle}</h5>
        <ul className="list-unstyled fw-semibold">
          {content.times.map((time, index) => (
            <li className="my-3" key={index}>
              {time}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-6 text-center">
        <img src={content.image} className="img-fluid rounded" alt={content.title} />
      </div>
    </>
  );
};

export default ClassCard;

