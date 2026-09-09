import { Link } from "react-router-dom";

function Sidebar({ admin = false }) {

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        Smart<span>Campus</span>
      </div>

      <nav>

        {admin ? (
          <>
            <Link to="/admin">
              📊 Dashboard
            </Link>

            <Link to="/admin/complaints">
              📋 Manage Complaints
            </Link>
          </>
        ) : (
          <>
            <Link to="/student">
              🏠 Dashboard
            </Link>

            <Link to="/student/create-complaint">
              📝 New Complaint
            </Link>

            <Link to="/student/complaints">
              📋 My Complaints
            </Link>

            <Link to="/student/profile">
              👤 Profile
            </Link>
          </>
        )}

      </nav>

      <Link to="/" className="logout">
        ↪ Logout
      </Link>

    </aside>
  );
}

export default Sidebar;