import { useState } from "react";
import axios from "axios";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  message: "",
};

/**
 * Custom Hook: useForm
 * Encapsulates reusable logic for a controlled form:
 *  - holds field values (useState)
 *  - validates fields on submit
 *  - submits the data with Axios to a dummy REST API
 *  - exposes loading / success / error state for the UI
 */
function useForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Update a single field, and clear its error as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Basic validation rules for the required fields
  const validate = (data) => {
    const newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s]{7,15}$/.test(data.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Please add a short message or address.";
    }

    return newErrors;
  };

  // Handle form submission: validate, then POST with Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return; // stop here, don't submit
    }

    setIsSubmitting(true);
    try {
      // Dummy REST API (JSONPlaceholder) — echoes back what we send
      await axios.post("https://jsonplaceholder.typicode.com/posts", values);
      setSubmitSuccess(true);
      setValues(initialValues);
    } catch (err) {
      setSubmitError("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError("");
  };

  return {
    values,
    errors,
    isSubmitting,
    submitError,
    submitSuccess,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useForm;
