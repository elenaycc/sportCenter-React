// ReviewCard component

import ReviewerInfo from "./ReviewerInfo";

const ReviewCard = ({ name, title, image, comment }) => {
  return (
    <>
      <ReviewerInfo name={name} title={title} image={image} />
      <div className="review-box position-relative text-white p-4 my-2">
        {comment}
      </div>
    </>
  );
};

export default ReviewCard;
