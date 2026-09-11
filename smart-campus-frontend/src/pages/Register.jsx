import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    rollNo: "",
    department: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Password validation
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name: form.name,
            email: form.email,
            rollNo: form.rollNo,
            department: form.department,
            password: form.password
          })
        }
      );

      const data = await response.json();

      console.log("Register response:", data);

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration successful! Please login.");

      // Go to login page
      navigate("/login");

    } catch (error) {

      console.error("Registration error:", error);

      alert(
        "Cannot connect to server. Make sure Spring Boot is running on port 8080."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <div className="auth-brand">
          Smart<span>Campus</span>
        </div>

        <div className="auth-content">

          <h1>
            Join the
            <span> Change.</span>
          </h1>

          <p>
            Create your student account and help make your campus
            better.
          </p>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card register-card">

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>

          <h2>Create Account</h2>

          <p className="auth-subtitle">
            Register as a student
          </p>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <label>Full Name</label>

            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <label>Email Address</label>

            <input
              name="email"
              type="email"
              placeholder="student@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <div className="two-inputs">

              {/* Roll Number */}
              <div>

                <label>Roll Number</label>

                <input
                  name="rollNo"
                  type="text"
                  placeholder="CS001"
                  value={form.rollNo}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Department */}
              <div>

                <label>Department</label>

                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                  <option value="Electrical">Electrical</option>
                </select>

              </div>

            </div>

            {/* Password */}
            <label>Password</label>

            <input
              name="password"
              type="password"
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
              required
            />

            {/* Confirm Password */}
            <label>Confirm Password</label>

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            {/* Submit */}
            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account →"}
            </button>

          </form>

          <p className="switch-auth">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;