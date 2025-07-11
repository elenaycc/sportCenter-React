// PurchaseSection component

import ProductGrid from "./ProductGrid";

const PurchaseSection = () => {
  return (
    <section id="purchase" className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold">PURCHASE FROM US</h2>
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
        <ProductGrid />
      </div>
    </section>
  );
};

export default PurchaseSection;
