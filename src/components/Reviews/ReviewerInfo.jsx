// ReviewerInfo component

const ReviewerInfo = ({ name, title, image }) => {
  return (
    <div className="d-flex align-items-center">
      <img
        src={image}
        className="rounded-circle me-3"
        width="50"
        height="50"
        alt={name}
      />
      <div>
        <h6 className="mb-0 fw-bold">{name}</h6>
        <small className="text-muted">{title}</small>
      </div>
    </div>
  );
};

export default ReviewerInfo;
