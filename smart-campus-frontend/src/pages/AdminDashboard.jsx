import { Link } from "react-router-dom";

function AdminDashboard() {

  return (
    <div className="dashboard-page">

      <aside className="sidebar">

        <div className="sidebar-logo">
          Smart<span>Campus</span>
        </div>

        <nav>

          <Link className="active" to="/admin">
            📊 Dashboard
          </Link>

          <Link to="/admin/complaints">
            📋 Manage Complaints
          </Link>

          <Link to="/">
            🏠 Home
          </Link>

        </nav>

        <Link to="/" className="logout">
          ↪ Logout
        </Link>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <p className="welcome-text">
              Administration
            </p>

            <h1>Admin Dashboard</h1>
          </div>

          <div className="user-avatar">
            A
          </div>

        </header>

        <section className="dashboard-cards">

          <div className="dashboard-stat">
            <div className="stat-icon">📋</div>
            <div>
              <span>Total Complaints</span>
              <strong>248</strong>
            </div>
          </div>

          <div className="dashboard-stat">
            <div className="stat-icon">⏳</div>
            <div>
              <span>Pending</span>
              <strong>42</strong>
            </div>
          </div>

          <div className="dashboard-stat">
            <div className="stat-icon">🔧</div>
            <div>
              <span>In Progress</span>
              <strong>31</strong>
            </div>
          </div>

          <div className="dashboard-stat">
            <div className="stat-icon">✓</div>
            <div>
              <span>Resolved</span>
              <strong>175</strong>
            </div>
          </div>

        </section>

        <div className="admin-overview">

          <div className="admin-box">

            <div className="section-header">

              <div>
                <h2>Recent Complaints</h2>
                <p>Latest issues reported by students</p>
              </div>

              <Link to="/admin/complaints">
                Manage All →
              </Link>

            </div>

            <div className="complaint-table">

              <div className="table-row table-heading">
                <span>ID</span>
                <span>Complaint</span>
                <span>Student</span>
                <span>Status</span>
              </div>

              <div className="table-row">
                <span>#CMP1024</span>
                <strong>Classroom Light</strong>
                <span>Rahul</span>
                <span className="status pending">
                  Pending
                </span>
              </div>

              <div className="table-row">
                <span>#CMP1023</span>
                <strong>Water Leakage</strong>
                <span>Priya</span>
                <span className="status progress">
                  In Progress
                </span>
              </div>

              <div className="table-row">
                <span>#CMP1022</span>
                <strong>Broken Bench</strong>
                <span>Mayuri</span>
                <span className="status resolved">
                  Resolved
                </span>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;