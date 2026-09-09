import { Link, useParams } from "react-router-dom";

function ComplaintDetails() {

  const { id } = useParams();

  return (
    <div className="dashboard-page">

      <aside className="sidebar">

        <div className="sidebar-logo">
          Smart<span>Campus</span>
        </div>

        <nav>

          <Link to="/student">
            🏠 Dashboard
          </Link>

          <Link to="/student/create-complaint">
            📝 New Complaint
          </Link>

          <Link className="active" to="/student/complaints">
            📋 My Complaints
          </Link>

          <Link to="/student/profile">
            👤 Profile
          </Link>

        </nav>

        <Link to="/" className="logout">
          ↪ Logout
        </Link>

      </aside>

      <main className="dashboard-main">

        <Link
          to="/student/complaints"
          className="back-link"
        >
          ← Back to Complaints
        </Link>

        <div className="details-header">

          <div>
            <span className="complaint-id">
              #{id}
            </span>

            <h1>Classroom Light Issue</h1>

            <p>
              Submitted on September 9, 2026
            </p>
          </div>

          <span className="status pending">
            Pending
          </span>

        </div>

        <div className="details-grid">

          <div className="details-card">

            <h2>Complaint Details</h2>

            <div className="detail-item">
              <span>Category</span>
              <strong>Electricity</strong>
            </div>

            <div className="detail-item">
              <span>Location</span>
              <strong>CSE Block - Room 204</strong>
            </div>

            <div className="detail-item">
              <span>Priority</span>
              <strong>Medium</strong>
            </div>

            <div className="description-box">

              <span>Description</span>

              <p>
                The classroom lights near the last two benches
                are not working properly. The room becomes very
                dark during afternoon classes.
              </p>

            </div>

          </div>

          <div className="details-card">

            <h2>Complaint Timeline</h2>

            <div className="timeline">

              <div className="timeline-item active">
                <div className="timeline-dot"></div>

                <div>
                  <strong>Complaint Submitted</strong>
                  <p>09 Sep 2026, 10:30 AM</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div>
                  <strong>Pending Review</strong>
                  <p>Waiting for administrator</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div>
                  <strong>In Progress</strong>
                  <p>Not started</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div>
                  <strong>Resolved</strong>
                  <p>Not resolved</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default ComplaintDetails;