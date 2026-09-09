import { Link } from "react-router-dom";

function ManageComplaints() {

  const complaints = [
    ["CMP1024", "Classroom Light Issue", "Rahul Sharma", "Electricity", "High", "Pending"],
    ["CMP1023", "Water Leakage", "Priya Patil", "Water", "Critical", "In Progress"],
    ["CMP1022", "Broken Bench", "Mayuri Masale", "Infrastructure", "Medium", "Resolved"],
    ["CMP1021", "WiFi Not Working", "Amit Kumar", "Internet", "High", "Pending"],
  ];

  return (
    <div className="dashboard-page">

      <aside className="sidebar">

        <div className="sidebar-logo">
          Smart<span>Campus</span>
        </div>

        <nav>

          <Link to="/admin">
            📊 Dashboard
          </Link>

          <Link className="active" to="/admin/complaints">
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

        <div className="page-title">

          <div>
            <p className="welcome-text">
              Administration
            </p>

            <h1>Manage Complaints</h1>

            <p>
              Review and manage student complaints.
            </p>
          </div>

        </div>

        <div className="filters">

          <input
            type="text"
            placeholder="Search complaints..."
          />

          <select>
            <option>All Categories</option>
            <option>Electricity</option>
            <option>Water</option>
            <option>Infrastructure</option>
            <option>Internet</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

        </div>

        <div className="admin-table-wrapper">

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Complaint</th>
                <th>Student</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {complaints.map((item) => (

                <tr key={item[0]}>

                  <td>#{item[0]}</td>

                  <td>
                    <strong>{item[1]}</strong>
                  </td>

                  <td>{item[2]}</td>

                  <td>{item[3]}</td>

                  <td>
                    <span className="priority">
                      {item[4]}
                    </span>
                  </td>

                  <td>

                    <span
                      className={`status ${
                        item[5] === "Resolved"
                          ? "resolved"
                          : item[5] === "In Progress"
                          ? "progress"
                          : "pending"
                      }`}
                    >
                      {item[5]}
                    </span>

                  </td>

                  <td>
                    <button className="action-btn">
                      View
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default ManageComplaints;