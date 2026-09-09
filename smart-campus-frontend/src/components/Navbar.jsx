import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Smart<span>Campus</span>
      </Link>

      <div className="nav-links">

        <Link to="/student">
          Dashboard
        </Link>

        <Link to="/student/complaints">
          Complaints
        </Link>

        <Link to="/student/create-complaint">
          Report Issue
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;