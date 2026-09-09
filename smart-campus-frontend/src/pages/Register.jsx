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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Later this will call Java backend

    navigate("/login");
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

            <label>Full Name</label>

            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

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

              <div>
                <label>Department</label>

                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>ECE</option>
                  <option>Mechanical</option>
                  <option>Civil</option>
                  <option>Electrical</option>
                </select>
              </div>

            </div>

            <label>Password</label>

            <input
              name="password"
              type="password"
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="auth-button">
              Create Account →
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