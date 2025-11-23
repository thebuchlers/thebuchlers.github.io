import { Turnstile } from "@marsidev/react-turnstile";
import { useNavigate, useLocation } from "react-router-dom";

const SITE_KEY = "0x4AAAAAACCdxKEx202dgoFL";

const VerifyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSuccess = async (turnstileToken: string) => {
    const res = await fetch(
      "https://thebuchlers.jonathon-mcnabb1.workers.dev/verify-turnstile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Turnstile-Token": turnstileToken,
        },
        body: JSON.stringify({ token: turnstileToken }),
      }
    );

    const data = await res.json();

    if (data.success && data.sessionToken) {
      // Save the new Turnstile session token
      localStorage.setItem("turnstile_session", data.sessionToken);

      // Save timestamp for expiration check
      localStorage.setItem("turnstile_timestamp", Date.now().toString());

      // Redirect user to original location (or fallback)
      const params = new URLSearchParams(location.search);
      const redirectTo = params.get("redirect") || "/";

      navigate(redirectTo, { replace: true });
    } else {
      alert("Verification failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        background: "#000",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Turnstile
        siteKey={SITE_KEY}
        onSuccess={handleSuccess}
        options={{ retry: "auto", theme: "dark" }}
      />
    </div>
  );
};

export default VerifyPage;
