import React from "react";

// Inline Styling approach — a plain JS object passed to the "style" prop.
const titleStyle = {
  fontWeight: 700,
  color: "#1e293b",
  marginBottom: "4px",
};

const subtitleStyle = {
  color: "#64748b",
  fontSize: "0.95rem",
};

// Reusable component that receives title & subtitle through props.
function Header({ title, subtitle }) {
  return (
    <div className="text-center py-4">
      <h1 style={titleStyle}>{title}</h1>
      <p style={subtitleStyle}>{subtitle}</p>
    </div>
  );
}

export default Header;
