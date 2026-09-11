import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {

        e.preventDefault();

        setError("");
        setMessage("");

        try {

            const data = await registerUser(form);

            setMessage(data.message);

            setTimeout(() => {
                navigate("/login");
            }, 1000);

        } catch (error) {

            setError(error.message);
        }
    }

    return (
        <div className="auth-container">

            <h1>Create Account</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Register
                </button>

            </form>

            {message && (
                <p>{message}</p>
            )}

            {error && (
                <p>{error}</p>
            )}

            <p>
                Already have an account?
                {" "}
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
            </p>

        </div>
    );
}

export default Register;