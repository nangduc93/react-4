import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { useState } from "react";
import "./stale.css";
// import Footer from "./Footer";

// Sample product data
// Product component to render individual product

// const [count, setCount] = useState(0);

// const incrementQuantity = (id) => {
//   setCount((prevQuantities) =>
//     prevQuantities.map((quantity) =>
//       quantity.id === id ? { ...quantity, count: quantity.count + 1 } : quantity
//     )
//   );
// };

// const decrementQuantity = () => {
//   setCount((prevQuantities) =>
//     prevQuantities.map((quantity) =>
//       quantity.id === id && quantity.count > 0
//         ? { ...quantity, count: quantity.count - 1 }
//         : quantity
//     )
//   );
// };

// Main component
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

  const [count, setItems] = useState(products);

  // const calculateTotalQ = (products) => {
  //   return products.reduce((acc, item) => acc + item.quantity, 0);
  // };

  // const calculateTotal = (products) => {
  //   return products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // };

  const totalPrice = count.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);

  // Function to clear all quantity objects (empty the array)
  const incrementQuantity = (id) => {
    console.log("Tang");
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    console.log("Giam");
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    console.log("Xoa");
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const Header = () => {
    // const totalQuantity = calculateTotalQ(products);
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
              <path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path>
            </svg>
            <div className="amount-container">
              <p className="total-amount">{totalQuantity}</p>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  const Item = () => {
    return (
      <>
        {count.length > 0 ? (
          count.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <h5>{item.title}</h5>
                <span className="item-price">${item.price}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  remove
                </button>
              </div>
              <div className="amount-item">
                <button
                  className="amount-btn"
                  onClick={() => incrementQuantity(item.id)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="amount-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                  </svg>
                </button>
                <span className="amount">{item.quantity}</span>
                <button
                  className="amount-btn"
                  onClick={() => decrementQuantity(item.id)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="amount-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </button>
              </div>
            </article>
          ))
        ) : (
          <p>No quantities available</p>
        )}
      </>
    );
  };

  // const items = products.map((item) => (
  //   // Có thể chuyển toàn bộ object
  //   // hoặc các thuộc tính riêng với cú pháp spread props
  //   <Item
  //     key={item.id}
  //     item={item}
  //     incrementQuantity={incrementQuantity}
  //     decrementQuantity={decrementQuantity}
  //     removeItem={removeItem}
  //   />
  // ));

  const Footer = () => {
    // const total = calculateTotal(products);
    const clearItems = () => {
      console.log("Sach");
      setItems([]); // Set the array to an empty array
    };
    return (
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            Total: <span>${totalPrice.toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearItems}>
          clear cart
        </button>
      </footer>
    );
  };
  // const total = item.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // const getTotalPrice = () => {
  //   return cart
  //     .reduce((total, item) => total + item.price * item.quantity, 0)
  //     .toFixed(2);
  // };

  return (
    <main>
      <Header />
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          <Item />
        </div>
        <Footer />
      </section>
    </main>
  );
};

export default ProductList;
