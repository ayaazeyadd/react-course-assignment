import React from "react";

// Reusable component, receives a custom message through props.
function EmptyState({ message }) {
  return <div className="alert alert-light text-center text-secondary border">{message}</div>;
}

export default EmptyState;
