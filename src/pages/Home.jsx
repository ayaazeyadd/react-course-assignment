import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1 className="fw-bold">Welcome to the Student Dashboard</h1>
        <p className="text-secondary col-md-8 mx-auto">
          A small React project built to practice components, hooks, styling,
          routing, forms, and Axios — all in one place.
        </p>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <Link to="/students" className="btn btn-primary">
            View Students
          </Link>
          <Link to="/contact" className="btn btn-outline-primary">
            Register / Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
