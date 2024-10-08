import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import "./stale.css";

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Samsung Galaxy S8",
      price: 399.99,
      thumbnail: "https://www.course-api.com/images/cart/phone-1.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "Google pixel",
      price: 499.99,
      thumbnail: "https://www.course-api.com/images/cart/phone-2.png",
      quantity: 1,
    },
    {
      id: 3,
      title: "Xiaomi Redmi Note 2",
      price: 699.99,
      thumbnail: "https://www.course-api.com/images/cart/phone-3.png",
      quantity: 1,
    },
    {
      id: 4,
      title: "Samsung Galaxy S7",
      price: 599.99,
      thumbnail: "https://www.course-api.com/images/cart/phone-4.png",
      quantity: 1,
    },
  ];

  const [items, setItems] = useState(products);

  const calculateTotalQ = (products) => {
    return products.reduce((acc, item) => acc + item.quantity, 0);
  };

  const calculateTotal = (products) => {
    return products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const clearItems = () => {
    setItems([]);
  };

  const incrementQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const Header = () => {
    const totalQuantity = calculateTotalQ(items);
    return (
      <nav>
        <div className="nav-center">
          <h4>useReducer</h4>
          <div className="nav-container">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="cart-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.