// ProductGrid component

import ProductCard from "./ProductCard";

const products = [
  {
    name: "Kettlebell / 5kg",
    image: "/src/public/images/purchase1.jpg",
    oldPrice: "89.99$",
    newPrice: "59.99$",
  },
  {
    name: "Treadmill",
    image: "/src/public/images/purchase2.jpg",
    oldPrice: "899.99$",
    newPrice: "599.99$",
  },
  {
    name: "Adjustable Dumbbell",
    image: "/src/public/images/purchase3.jpg",
    oldPrice: "89.99$",
    newPrice: "59.99$",
  },
  {
    name: "Kettlebell / 3kg",
    image: "/src/public/images/purchase4.jpg",
    oldPrice: "49.99$",
    newPrice: "29.99$",
  },
];

const ProductGrid = () => {
  return (
    <div className="row g-4">
      {products.map((product, index) => (
        <div className="col-md-3" key={index}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
