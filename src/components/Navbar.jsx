import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/students", label: "Students" },
  { to: "/shop", label: "Shop" },
  { to: "/cart", label: "Cart" },
  { to: "/contact", label: "Contact / Register" },
];

// Reusable component: the app-wide navigation bar.
// Reads Redux state (cart count) via useSelector and
// Context state (theme) via the useTheme() custom hook.
function Navbar() {
  // Redux: total number of items across the whole cart
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );

  // Context API: current theme + toggler
  const { theme, toggleTheme } = useTheme();

  return (
    // Ternary Operator: switch navbar color scheme based on the Context theme
    <nav
      className={`navbar navbar-expand-md mb-4 ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-dark bg-primary"
      }`}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Student Dashboard
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-md-center">
            {/* .map(): dynamically render one nav link per entry */}
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "fw-bold text-white" : "text-white-50"}`
                  }
                >
                  {link.label}
                  {/* && Operator: only show the cart badge on the Cart link, and only if it's > 0 */}
                  {link.to === "/cart" && cartCount > 0 && (
                    <span className="badge bg-warning text-dark ms-1">{cartCount}</span>
                  )}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-md-2 mt-2 mt-md-0">
              <button
                className="btn btn-sm btn-outline-light"
                onClick={toggleTheme}
              >
                {/* Ternary Operator: label/icon depends on Context theme value */}
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
