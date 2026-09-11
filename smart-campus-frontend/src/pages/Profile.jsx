import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/api";

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

        async function loadProfile() {

            try {

                const data = await getProfile();

                setProfile(data);

            } catch (error) {

                console.error(error);

                localStorage.removeItem("token");

                setError(
                    "Session expired. Please login again."
                );

                navigate("/login");

            } finally {

                setLoading(false);
            }
        }

        loadProfile();

    }, [navigate]);

    function logout() {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("name");

        navigate("/login");
    }

    if (loading) {
        return <h2>Loading profile...</h2>;
    }

    if (!profile) {
        return <h2>{error}</h2>;
    }

    return (
        <div className="profile-container">

            <h1>My Profile</h1>

            <div className="profile-card">

                <h2>
                    {profile.name}
                </h2>

                <p>
                    <strong>ID:</strong>{" "}
                    {profile.id}
                </p>

                <p>
                    <strong>Name:</strong>{" "}
                    {profile.name}
                </p>

                <p>
                    <strong>Email:</strong>{" "}
                    {profile.email}
                </p>

                <p>
                    <strong>Role:</strong>{" "}
                    {profile.role}
                </p>

                <p>
                    <strong>Registered:</strong>{" "}
                    {profile.createdAt
                        ? new Date(
                            profile.createdAt
                        ).toLocaleString()
                        : "N/A"}
                </p>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Profile;