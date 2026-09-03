import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../redux/slices/cartSlice.js";
import { useTheme } from "../context/ThemeContext.jsx";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Your Cart</h2>

      {/* Ternary Operator: show empty state or the cart table */}
      {items.length === 0 ? (
        <div className="alert alert-light border text-center">
          Your cart is empty.{" "}
          <Link to="/shop" className="alert-link">
            Go shopping
          </Link>
          .
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table
              className={`table align-middle ${theme === "dark" ? "table-dark" : ""}`}
            >
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* .map(): render one row per cart item */}
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.emoji} {item.name}
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <div className="btn-group btn-group-sm" role="group">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => dispatch(decreaseQty(item.id))}
                        >
                          -
                        </button>
                        <span className="btn btn-outline-secondary disabled">
                          {item.qty}
                        </span>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => dispatch(increaseQty(item.id))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${item.price * item.qty}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h5 className="mb-0">Total: ${total}</h5>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
