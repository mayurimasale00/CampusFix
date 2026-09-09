import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Temporary frontend login
    // Later we will connect this to Spring Boot

    navigate("/student");
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
            Login to report and track your campus complaints.
          </p>
        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>

          <h2>Login</h2>

          <p className="auth-subtitle">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="student@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="form-options">

              <label className="checkbox-label">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#forgot">
                Forgot password?
              </a>

            </div>

            <button
              type="submit"
              className="auth-button"
            >
              Login →
            </button>

          </form>

          <p className="switch-auth">
            Don't have an account?

            <Link to="/register">
              {" "}Create Account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;