import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 fw-bold">404</h1>
      <p className="text-secondary mb-4">
        Oops — the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
