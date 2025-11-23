import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  // UI State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch(
        "https://thebuchlers.jonathon-mcnabb1.workers.dev/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Invalid username or password.");
        setLoading(false);
        return;
      }

      // Save user session
      localStorage.setItem("auth_token", data.accessToken);
      localStorage.setItem("user_name", username);
      localStorage.setItem("auth_issued_at", Date.now().toString());

      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen  text-white font-sans flex items-center justify-center">
      {/* Background Image + Dark Gradient */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/login-bg.png"
          alt="login-bg"
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-black/70 p-10 rounded-lg shadow-xl border border-white/10">
        
        <div
            className="flex justify-center text-red-600 font-bold text-4xl tracking-wide mb-6"
          >
            NETFLIX
          </div>
        <h1 className="text-3xl font-semibold mb-6 text-center">Sign In</h1>

        {/* Error message */}
        {errorMsg && (
          <div className="mb-4 text-red-400 text-center text-sm">
            {errorMsg}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="bg-neutral-800 text-white px-4 py-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="bg-neutral-800 text-white px-4 py-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-red-600 hover:bg-red-700 w-full py-3 rounded-md font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
