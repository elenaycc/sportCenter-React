// ReviewsSection component

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Diet Expert",
    title: "CFO",
    image: "/images/client1.jpg",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde adipisci, explicabo dolore ipsam fugit iste, rerum libero itaque deleniti nisi numquam!",
  },
  {
    name: "Cardio Trainer",
    title: "CEO",
    image: "/images/client2.jpg",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, laborum. Alias architecto, velit, ipsa est animi sequi Molestias et, id non aperiam laboriosam!",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-5" style={{ backgroundColor: "#eaf0f6" }}>
      <div className="container text-center">
        <h2 className="fw-bold">REVIEW CLIENT</h2>
        <div
          className="rounded-2 mb-4"
          style={{
            width: "80px",
            borderBottom: "6px solid #f49c0f",
            margin: "0 auto",
          }}
        ></div>
        <p className="text-muted mb-5 fw-semibold">
          Lorem Ipsum is not simply random text. It has roots in a piece of classical at <br />
          Hampden–Sydney College.
        </p>
        <div className="row justify-content-center g-5">
          {reviews.map((review, index) => (
            <div className="col-md-5 text-start" key={index}>
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

