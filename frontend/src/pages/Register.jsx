import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import { registerUser } from "../api/auth";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");

            await registerUser(formData);

            navigate("/login");

        } catch (err) {

            setError(
                "Registration failed. Please try again."
            );

        } finally {
            setLoading(false);
        }
    };
    return (
        <AuthLayout>

            <div className="w-full max-w-md">

                <div className="bg-slate-900/80 backdrop-blur rounded-2xl p-8 border border-slate-800">

                    <h2 className="text-3xl font-bold mb-2">
                        Create Account
                    </h2>

                    <p className="text-slate-400 mb-8">
                        Start managing tasks efficiently
                    </p>

                    {
                        error && (
                            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500 text-red-400">
                                {error}
                            </div>
                        )
                    }

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 outline-none"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 outline-none"
                        />

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 outline-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 transition p-3 rounded-xl font-semibold"
                        >
                            {
                                loading
                                    ? "Creating Account..."
                                    : "Create Account"
                            }
                        </button>

                    </form>

                </div>

            </div>

        </AuthLayout>
    );
}

export default Register;