import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Player = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const season = searchParams.get("season");
  const episode = searchParams.get("episode");

  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const videoMap: Record<string, string> = {
    "1-1": "test-video-file.mp4",
    "1-2": "test-video-file.mp4",
    "1-3": "test-video-file.mp4",
    "2-1": "test-video-file.mp4",
    "2-2": "test-video-file.mp4",
    "2-3": "test-video-file.mp4",
  };

  const key = `${season}-${episode}`;
  const videoKey = videoMap[key];

  useEffect(() => {
    const loadVideo = async () => {
      if (!videoKey) {
        setError("Video not found.");
        return;
      }

      try {
        const token = localStorage.getItem("auth_token");
        const res = await fetch(
          `https://thebuchlers.jonathon-mcnabb1.workers.dev/get-video?key=${videoKey}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // If session expired or invalid → wipe and redirect
        if (res.status === 401) {
          localStorage.removeItem("turnstile_session");
          return;
        }

        if (!res.ok) {
          setError("Failed to load video.");
          return;
        }

        const data = await res.json();
        setSignedUrl(data.url);
      } catch (err) {
        setError("Network error loading video.");
        localStorage.removeItem("turnstile_session");
        navigate(`/`);
      }
    };

    loadVideo();
  }, [videoKey, navigate, location.pathname, location.search]);

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

      {/* Loading / Error UI */}
      {!signedUrl && !error && (
        <p style={{ color: "white", fontSize: "24px" }}>Loading…</p>
      )}
      {error && <p style={{ color: "red", fontSize: "24px" }}>{error}</p>}

      {/* Video Player */}
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
