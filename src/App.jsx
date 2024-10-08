import React from "react";
// import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
// import Products from "./Component/Stale";
import ProductList from "./Component/ProductList";
// import ProductList from "./Component/Modal";

const App = () => {
  // const [count, setCount] = useState(0);

  // const products = [
  //   {
  //     id: 1,
  //     title: "Samsung Galaxy S8",
  //     price: 399.99,
  //     thumbnail: "https://www.course-api.com/images/cart/phone-1.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Google pixel",
  //     price: 499.99,
  //     thumbnail: "https://www.course-api.com/images/cart/phone-2.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Xiaomi Redmi Note 2",
  //     price: 699.99,
  //     thumbnail: "https://www.course-api.com/images/cart/phone-3.png",
  //   },
  //   {
  //     id: 4,
  //     title: "Samsung Galaxy S7",
  //     price: 599.99,
  //     thumbnail: "https://www.course-api.com/images/cart/phone-4.png",
  //   },
  // ];
  return <ProductList />;
};

export default App;
