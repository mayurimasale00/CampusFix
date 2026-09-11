const API_URL = "http://localhost:8080";

export async function registerUser(userData) {
    const response = await fetch(
        `${API_URL}/api/auth/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            typeof data === "string"
                ? data
                : "Registration failed"
        );
    }

    return data;
}

export async function loginUser(userData) {
    const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            typeof data === "string"
                ? data
                : "Login failed"
        );
    }

    return data;
}

export async function getProfile() {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/api/profile`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );

    if (!response.ok) {
        throw new Error("Unable to fetch profile");
    }

    return await response.json();
}