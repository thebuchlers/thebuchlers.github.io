import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Login expires after 7 days
const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

const AppLayout = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("auth_token");
  const username = localStorage.getItem("user_name");
  const issuedAt = localStorage.getItem("auth_issued_at");

  // ─────────────────────────────────────────
  // AUTH VALIDATION (run once on layout load)
  // ─────────────────────────────────────────
  useEffect(() => {
    let expired = false;

    if (issuedAt) {
      const ts = Number(issuedAt);
      if (Date.now() - ts > ONE_WEEK) {
        expired = true;
      }
    }

    if (!token || !username || expired) {
      // wipe only login data
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_name");
      localStorage.removeItem("auth_issued_at");
    }
  }, []);

  // Loading state until auth is evaluated
  //   if (!isAuthChecked) return null;

  // ─────────────────────────────────────────
  // NOT LOGGED IN → Redirect to Login
  // (Turnstile is handled by ProtectedRoute)
  // ─────────────────────────────────────────
  if (!token || !username) {
    return <Navigate to="/login" />;
  }

  // ─────────────────────────────────────────
  // LOGOUT HANDLER (wipe ONLY login data)
  // ─────────────────────────────────────────
  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_name");
    localStorage.removeItem("auth_issued_at");

    navigate('/login')
    
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="w-full bg-black/40 backdrop-blur-sm border-white/10">
        <div className="w-full flex items-center justify-between py-4 px-8">
          <div
            className="text-red-600 font-bold text-3xl tracking-wide cursor-pointer"
            onClick={() => navigate("/")}
          >
            NETFLIX
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-300 text-sm">{username}</span>

            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
