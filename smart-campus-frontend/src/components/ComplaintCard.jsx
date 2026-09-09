import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function ComplaintCard({ complaint }) {

  return (
    <div className="complaint-card">

      <div className="complaint-card-top">

        <div>

          <span className="complaint-id">
            #{complaint.id}
          </span>

          <h2>{complaint.title}</h2>

        </div>

        <StatusBadge status={complaint.status} />

      </div>

      <div className="complaint-meta">

        <span>📁 {complaint.category}</span>

        <span>📍 {complaint.location}</span>

        <span>📅 {complaint.date}</span>

      </div>

      <Link
        to={`/student/complaint/${complaint.id}`}
        className="details-link"
      >
        View Details →
      </Link>

    </div>
  );
}

export default ComplaintCard;