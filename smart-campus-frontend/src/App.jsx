import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import CreateComplaint from "./pages/CreateComplaint";
import MyComplaints from "./pages/MyComplaints";
import ComplaintDetails from "./pages/ComplaintDetails";
import AdminDashboard from "./pages/AdminDashboard";
import ManageComplaints from "./pages/ManageComplaints";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/student/create-complaint" element={<CreateComplaint />} />
      <Route path="/student/complaints" element={<MyComplaints />} />
      <Route
        path="/student/complaint/:id"
        element={<ComplaintDetails />}
      />
      <Route path="/student/profile" element={<Profile />} />

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/complaints" element={<ManageComplaints />} />

      <Route
        path="*"
        element={
          <div className="not-found">
            <h1>404</h1>
            <p>Page not found</p>
          </div>
        }
      />
    </Routes>
  );
}

export default App;