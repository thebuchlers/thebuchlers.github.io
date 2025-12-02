import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Player = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Decode individual params safely
  const encodedSeason = searchParams.get("season");
  const encodedEpisode = searchParams.get("episode");

  const season = encodedSeason ? decodeURIComponent(encodedSeason) : null;
  const episode = encodedEpisode ? decodeURIComponent(encodedEpisode) : null;

  // Re-construct decoded R2 key
  const decodedKey = season && episode ? `${season}/${episode}` : null;

  // Re-encode key for query string (required!)
  const encodedKeyForAPI = decodedKey
    ? encodeURIComponent(decodedKey)
    : null;

  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVideo = async () => {
      if (!encodedKeyForAPI) {
        setError("Video not found.");
        return;
      }

      try {
        const token = localStorage.getItem("auth_token");

        const res = await fetch(
          `https://thebuchlers.jonathon-mcnabb1.workers.dev/get-video?key=${encodedKeyForAPI}.mp4`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 401) {
          localStorage.removeItem("turnstile_session");
          navigate("/");
          return;
        }

        if (!res.ok) {
          setError("Failed to load video.");
          return;
        }

        const data = await res.json();
        setSignedUrl(data.url);
      } catch {
        setError("Network error loading video.");
        navigate("/");
      }
    };

    loadVideo();
  }, [encodedKeyForAPI, navigate]);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/keeping-up-with-the-buchlers")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "rgba(0,0,0,0.6)",
          border: "1px solid #555",
          padding: "10px 16px",
          fontSize: "16px",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        ← Back
      </button>

      {!signedUrl && !error && (
        <p style={{ color: "white", fontSize: "24px" }}>Loading…</p>
      )}
      {error && <p style={{ color: "red", fontSize: "24px" }}>{error}</p>}

      {signedUrl && (
        <video
          src={signedUrl}
          controls
          autoPlay
          style={{
            width: "90vw",
            height: "50vw",
            maxHeight: "80vh",
            border: "none",
          }}
        />
      )}
    </div>
  );
};

export default Player;
