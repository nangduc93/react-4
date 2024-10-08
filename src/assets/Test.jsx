import React from "react";

import { CartProvider, useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1,
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5,
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1,
    },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  //   CartItem
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>
      {/* 
      <did className="cart-items">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
        </did> */}

      {items.map((item) => (
        <li key={item.id}>
          {item.quantity} x {item.name} &mdash;
          <button
            onClick={() =>
              updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
            }
          >
            -
          </button>
          <button
            onClick={() =>
              updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
            }
          >
            +
          </button>
          <button onClick={() => removeItem(item.id)}>&times;</button>
        </li>
      ))}

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() =>
                updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
              }
            >
              -
            </button>
            <button
              onClick={() =>
                updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
              }
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
}
