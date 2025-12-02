import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // UI State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 🚀 Ref to track whether auto-login should occur
  const shouldAutoLogin = useRef(false);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

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

  // 1️⃣ Load query params only once
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const qpUser = params.get("username");
    const qpPass = params.get("password");

    if (qpUser) setUsername(qpUser);
    if (qpPass) setPassword(qpPass);

    // If both exist → mark autologin for the NEXT render only
    if (qpUser && qpPass) {
      shouldAutoLogin.current = true;
    }
  }, [location.search]);

  // 2️⃣ Auto login after state updates BUT only if QR login was requested
  useEffect(() => {
    if (shouldAutoLogin.current && username && password) {
      shouldAutoLogin.current = false; // prevent future triggers
      handleLogin();
    }
  }, [username, password]);

  return (
    <div className="relative min-h-screen text-white font-sans flex items-center justify-center overflow-hidden">
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10 bg-black" />

      {/* Vertical gradient (black → red tint) */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black via-black to-red-950/30" />

      {/* Main red spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-red-900/25 blur-[220px]" />

      {/* Extra bloom ring */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full bg-red-700/10 blur-[300px]" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.8)_100%)]" />

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('/assets/noise.png')] mix-blend-overlay" />

      {/* Login Card */}
      <div
        className="
          relative z-10 w-full max-w-md 
          bg-white/5 
          backdrop-blur-xl 
          p-10 
          rounded-xl 
          shadow-[0_0_40px_rgba(0,0,0,0.4)] 
          border border-white/20
          before:absolute before:inset-0 before:rounded-xl
          before:bg-linear-to-b before:from-white/10 before:to-transparent
          before:opacity-[0.15] before:-z-10
        "
      >
        <div className="flex justify-center text-red-600 font-bold text-4xl tracking-wide mb-8 drop-shadow-lg">
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
          <input
            type="text"
            placeholder="Username"
            className="bg-neutral-800/60 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition border border-white/10"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-neutral-800/60 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition border border-white/10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
