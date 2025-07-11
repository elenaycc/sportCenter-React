// ProductCard component

const ProductCard = ({ name, image, oldPrice, newPrice }) => {
  return (
    <div className="card shadow-sm h-100">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="fw-bold">{name}</h5>
          <p>
            <span className="text-decoration-line-through">{oldPrice}</span> /
            <span className="fw-bold"> {newPrice}</span>
          </p>
        </div>
        <div className="mt-auto pt-2 text-center">
          <div className="d-inline-flex align-items-center justify-content-center">
            <i className="bi bi-cart3 me-2 fs-5"></i>
            <span className="fw-bold">Add To Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

