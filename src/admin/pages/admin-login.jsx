import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const AdminLogin = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { authToken } = useContext(AuthContext);
    if (authToken) return <Navigate to={"/admin"} />;
    console.log(authToken);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await login(email, password);
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center flex-col justify-start mt-10">
            <div className="bg-blackFade flex flex-col justify-center shadow-md shadow-white/40 p-6 rounded-md">
                <h2 className="text-2xl my-4 text-green">Admin Login</h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 justify-between mt-6"
                >
                    <div className="flex justify-between gap-2">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            className="input"
                            placeholder="*******"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="button block mt-4"
                        disabled={loading}
                    >
                        {loading ? "Checking..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
