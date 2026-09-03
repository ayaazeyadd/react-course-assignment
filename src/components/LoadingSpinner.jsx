import React from "react";

// Reusable component shown while useStudents() hook is still "loading".
function LoadingSpinner() {
  return (
    <div className="d-flex flex-column align-items-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-secondary mt-2 small">Loading students...</p>
    </div>
  );
}

export default LoadingSpinner;
