import React from "react";
import useForm from "../hooks/useForm.js";

function Contact() {
  const {
    values,
    errors,
    isSubmitting,
    submitError,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useForm();

  return (
    <div className="container" style={{ maxWidth: "560px" }}>
      <h2 className="mb-1">Contact / Register</h2>
      <p className="text-secondary mb-4">
        Fill in the form below. Your data is sent with Axios to a demo API
        (JSONPlaceholder) — nothing is stored permanently.
      </p>

      {/* Ternary Operator: show success alert or the form */}
      {submitSuccess ? (
        <div className="alert alert-success">
          🎉 Thanks! Your submission was received successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
              value={values.fullName}
              onChange={handleChange}
            />
            {/* && Operator: only show the error text if it exists */}
            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Message / Address</label>
            <textarea
              name="message"
              rows="3"
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              value={values.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          {/* && Operator: only show the server error banner if one exists */}
          {submitError && <div className="alert alert-danger py-2">{submitError}</div>}

          <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
            {/* Ternary Operator: swap button label + show spinner while submitting */}
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
