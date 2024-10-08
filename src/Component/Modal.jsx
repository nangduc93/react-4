import React from "react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "A high-performance laptop",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 599,
    description: "A sleek smartphone with great features",
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    description: "Noise-canceling headphones",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299,
    description: "A smartwatch with health tracking",
  },
];

// Product component to render individual product
const Product = ({ name, price, description }) => (
  <div className="product">
    <h2>{name}</h2>
    <p>Price: ${price}</p>
    <p>{description}</p>
  </div>
);

// Main component
const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Product List</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
