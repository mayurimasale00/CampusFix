function StatusBadge({ status }) {

  const className =
    status === "Resolved"
      ? "resolved"
      : status === "In Progress"
      ? "progress"
      : "pending";

  return (
    <span className={`status ${className}`}>
      {status}
    </span>
  );
}

export default StatusBadge;