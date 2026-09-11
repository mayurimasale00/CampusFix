import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");

    try {

      const response = await fetch(
        "http://localhost:8080/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // SAVE JWT TOKEN
      localStorage.setItem("token", data.token);

      // SAVE USER NAME
      localStorage.setItem("name", data.name);

      // SAVE ROLE
      localStorage.setItem("role", data.role);

      // Go to profile
      navigate("/profile");

    } catch (error) {

      console.error(error);
      setError("Cannot connect to backend");

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
            Welcome
            <span> Back.</span>
          </h1>

          <p>
            Login to manage your campus complaints.
          </p>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>

          <h2>Welcome Back</h2>

          <p className="auth-subtitle">
            Login to your student account
          </p>

          {error && (
            <p style={{ color: "red" }}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>

            <label>Email Address</label>

            <input
              name="email"
              type="email"
              placeholder="student@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>

            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="auth-button"
            >
              Login →
            </button>

          </form>

          <p className="switch-auth">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;