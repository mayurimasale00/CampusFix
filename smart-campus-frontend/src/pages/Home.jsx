import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <nav className="navbar">
        <div className="logo">
          Smart<span>Campus</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>
      </nav>

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            🏫 Smart Campus Management
          </div>

          <h1>
            Make Your Campus
            <span> Better Together.</span>
          </h1>

          <p>
            Report campus problems, track complaints, and help your
            college create a cleaner, safer and smarter environment.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">
              Report a Complaint →
            </Link>

            <a href="#features" className="secondary-btn">
              Explore Features
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>24/7</strong>
              <small>Complaint Access</small>
            </div>

            <div>
              <strong>Fast</strong>
              <small>Issue Tracking</small>
            </div>

            <div>
              <strong>100%</strong>
              <small>Transparent</small>
            </div>
          </div>

        </div>

        <div className="hero-card">

          <div className="dashboard-preview">

            <div className="preview-header">
              <div>
                <small>Student Dashboard</small>
                <h3>Good Morning 👋</h3>
              </div>

              <div className="avatar">M</div>
            </div>

            <div className="preview-stats">

              <div className="preview-stat">
                <span>📋</span>
                <div>
                  <strong>12</strong>
                  <small>Total Complaints</small>
                </div>
              </div>

              <div className="preview-stat">
                <span>⏳</span>
                <div>
                  <strong>4</strong>
                  <small>Pending</small>
                </div>
              </div>

              <div className="preview-stat">
                <span>✓</span>
                <div>
                  <strong>8</strong>
                  <small>Resolved</small>
                </div>
              </div>

            </div>

            <div className="recent-box">

              <div className="recent-title">
                <strong>Recent Complaints</strong>
                <span>View All</span>
              </div>

              <div className="complaint-preview">
                <div className="complaint-icon">💡</div>

                <div>
                  <strong>Classroom Light Issue</strong>
                  <small>Computer Science Block</small>
                </div>

                <span className="status pending">
                  Pending
                </span>
              </div>

              <div className="complaint-preview">
                <div className="complaint-icon">🚿</div>

                <div>
                  <strong>Water Leakage</strong>
                  <small>Hostel Building</small>
                </div>

                <span className="status resolved">
                  Resolved
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section id="features" className="features">

        <div className="section-heading">
          <span>POWERFUL FEATURES</span>
          <h2>Everything You Need</h2>
          <p>
            A centralized platform for students and administrators
            to manage campus complaints efficiently.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Easy Complaints</h3>
            <p>
              Submit campus complaints quickly with category,
              description and supporting images.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Track Status</h3>
            <p>
              Track every complaint from submission to resolution
              in real time.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Resolution</h3>
            <p>
              Administrators can prioritize and assign complaints
              to the responsible department.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Smart Dashboard</h3>
            <p>
              View complaint statistics and identify recurring
              campus problems.
            </p>
          </div>

        </div>

      </section>

      <section id="about" className="about-section">

        <div>
          <span className="section-label">ABOUT THE SYSTEM</span>

          <h2>
            Building a Smarter
            <span> Campus.</span>
          </h2>

          <p>
            Smart Campus Complaint System connects students,
            faculty and campus administrators through one simple
            platform.
          </p>

          <p>
            Instead of manually visiting offices or making phone
            calls, students can report issues online and track
            their progress.
          </p>

          <Link to="/register" className="primary-btn">
            Get Started →
          </Link>
        </div>

        <div className="about-box">
          <div className="about-number">01</div>
          <h3>Report</h3>
          <p>Submit the problem with all required information.</p>

          <div className="about-number">02</div>
          <h3>Track</h3>
          <p>Monitor the complaint status from your dashboard.</p>

          <div className="about-number">03</div>
          <h3>Resolve</h3>
          <p>Campus administration resolves the reported issue.</p>
        </div>

      </section>

      <footer>
        <div className="logo">
          Smart<span>Campus</span>
        </div>

        <p>
          © 2026 Smart Campus Complaint System
        </p>
      </footer>

    </div>
  );
}

export default Home;