import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateComplaint() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    location: "",
    priority: "Medium",
    description: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Complaint:", form);

    // Later:
    // axios.post("http://localhost:8080/api/complaints", form)

    alert("Complaint submitted successfully!");

    navigate("/student/complaints");
  };

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

          <Link className="active" to="/student/create-complaint">
            📝 New Complaint
          </Link>

          <Link to="/student/complaints">
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

        <div className="page-title">

          <div>
            <p className="welcome-text">
              Student Portal
            </p>

            <h1>Submit a Complaint</h1>

            <p>
              Tell us about the problem you're facing.
            </p>
          </div>

        </div>

        <div className="complaint-form-card">

          <form onSubmit={handleSubmit}>

            <div className="form-section">

              <h2>Complaint Information</h2>

              <div className="form-grid">

                <div className="form-group">

                  <label>Complaint Title</label>

                  <input
                    name="title"
                    type="text"
                    placeholder="Example: Classroom fan not working"
                    value={form.title}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>Category</label>

                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select category
                    </option>
                    <option>Electricity</option>
                    <option>Water</option>
                    <option>Infrastructure</option>
                    <option>Cleanliness</option>
                    <option>Internet</option>
                    <option>Hostel</option>
                    <option>Transportation</option>
                    <option>Security</option>
                    <option>Other</option>
                  </select>

                </div>

                <div className="form-group">

                  <label>Location</label>

                  <input
                    name="location"
                    type="text"
                    placeholder="Example: CSE Block - Room 204"
                    value={form.location}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>Priority</label>

                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>

                </div>

              </div>

              <div className="form-group">

                <label>Description</label>

                <textarea
                  name="description"
                  rows="7"
                  placeholder="Describe the problem in detail..."
                  value={form.description}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Upload Image</label>

                <div className="upload-box">

                  <span>📷</span>

                  <p>
                    Drag & drop an image here or
                    <strong> browse</strong>
                  </p>

                  <small>
                    PNG, JPG up to 5MB
                  </small>

                  <input type="file" accept="image/*" />

                </div>

              </div>

            </div>

            <div className="form-actions">

              <Link
                to="/student"
                className="cancel-btn"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="auth-button submit-btn"
              >
                Submit Complaint →
              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default CreateComplaint;