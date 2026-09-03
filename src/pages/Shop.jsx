import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice.js";
import products from "../redux/products.js";
import { useTheme } from "../context/ThemeContext.jsx";

function Shop() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { theme } = useTheme();

  // Helper to check how many of a given product are already in the cart
  const qtyInCart = (id) => {
    const found = cartItems.find((item) => item.id === id);
    return found ? found.qty : 0;
  };

  return (
    <div className="container py-4">
      <h2 className="mb-1">Shop</h2>
      <p className={theme === "dark" ? "text-light-emphasis mb-4" : "text-secondary mb-4"}>
        Add a few products to your cart using Redux state.
      </p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
        {/* .map(): render one card per product */}
        {products.map((product) => {
          const qty = qtyInCart(product.id);
          return (
            <div className="col" key={product.id}>
              <div
                className={`card h-100 shadow-sm ${
                  theme === "dark" ? "bg-secondary text-light border-0" : ""
                }`}
              >
                <div className="card-body text-center">
                  <div style={{ fontSize: "2.5rem" }}>{product.emoji}</div>
                  <h5 className="card-title mt-2">{product.name}</h5>
                  <p className="card-text fw-semibold">${product.price}</p>

                  {/* && Operator: only show the "already in cart" note if qty > 0 */}
                  {qty > 0 && (
                    <p className="small text-success mb-2">In cart: {qty}</p>
                  )}

                  <button
                    className="btn btn-primary w-100"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    {/* Ternary Operator: change button label if already added */}
                    {qty > 0 ? "Add Another" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
