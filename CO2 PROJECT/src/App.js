import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { getProducts } from "./productService";
import "./App.css";

function calculateCartTotal(cart) {
  return cart.reduce(
    (sum, item) =>
      sum + item.product.price * item.quantity,
    0
  );
}

function createDiscount(percent) {
  return function (amount) {
    return amount - (amount * percent) / 100;
  };
}

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCart(updatedCart);
    } else {
      const newItem = {
        product,
        quantity: 1,
      };

      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item.product.id !== id
    );

    setCart(updatedCart);
  };

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );

  const total = calculateCartTotal(cart);

  const applyTenPercent = createDiscount(10);

  const discountedTotal =
    applyTenPercent(total);

  return (
    <div className="container">
      <h1>Shopping Cart Application</h1>

      {/* Requirement 1 & 2 */}
      <div
        style={{
          textAlign: "left",
          backgroundColor: "#f4f4f4",
          padding: "15px",
          margin: "15px",
          borderRadius: "10px",
        }}
      >
        <h2>Interfaces</h2>

        <pre>
{`interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}`}
        </pre>
      </div>

      <h2>Filter Products</h2>

      <div>
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button
          onClick={() =>
            setCategory("Electronics")
          }
        >
          Electronics
        </button>

        <button
          onClick={() =>
            setCategory("Accessories")
          }
        >
          Accessories
        </button>
      </div>

      <h2>Products</h2>

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <hr />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={total}
        discountedTotal={discountedTotal}
      />
    </div>
  );
}

export default App;