import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:8080/api/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(async (response) => {

        if (response.status === 401 ||
            response.status === 403) {

          localStorage.removeItem("token");
          navigate("/login");

          return null;
        }

        if (!response.ok) {

          const text = await response.text();

          throw new Error(
            text || "Failed to fetch profile"
          );
        }

        return response.json();
      })
      .then((data) => {

        if (data) {
          console.log("PROFILE DATA:", data);
          setProfile(data);
        }

      })
      .catch((error) => {

        console.error("PROFILE ERROR:", error);
        setError(error.message);

      })
      .finally(() => {

        setLoading(false);

      });

  }, [navigate]);


  if (loading) {
    return (
      <div>
        <h2>Loading profile...</h2>
      </div>
    );
  }


  if (error) {
    return (
      <div>
        <h2>Profile Error</h2>
        <p>{error}</p>
      </div>
    );
  }


  if (!profile) {
    return (
      <div>
        <h2>No profile data found</h2>
      </div>
    );
  }


  return (
    <div className="profile-page">

      <h1>My Profile</h1>

      <div className="profile-card">

        <h2>{profile.name}</h2>

        <p>
          <strong>Email:</strong>{" "}
          {profile.email}
        </p>

        <p>
          <strong>Role:</strong>{" "}
          {profile.role}
        </p>

        <p>
          <strong>ID:</strong>{" "}
          {profile.id}
        </p>

      </div>

    </div>
  );
}

export default Profile;