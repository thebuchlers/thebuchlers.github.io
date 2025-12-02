import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { SEASONS } from "./season.db";

const Player = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const seasonId = Number(searchParams.get("seasonId"));
  const episodeId = Number(searchParams.get("episodeId"));

  // Lookup season + episode
  const { season, episode } = useMemo(() => {
    const s = SEASONS.find((s) => s.id === seasonId) || null;
    const e = s?.episodes.find((ep) => ep.id === episodeId) || null;
    return { season: s, episode: e };
  }, [seasonId, episodeId]);

  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ---- Load video ----
  useEffect(() => {
    const loadVideo = async () => {
      if (!season || !episode) {
        setError("Video not found.");
        return;
      }

      try {
        const token = localStorage.getItem("auth_token");

        const res = await fetch(
          "https://thebuchlers.jonathon-mcnabb1.workers.dev/get-video",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              seasonName: season.name,
              episodeName: episode.name,
            }),
          }
        );

        if (res.status === 401) {
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
  }, [season, episode, navigate]);

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
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
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
          zIndex: 20,
        }}
      >
        ← Back
      </button>

      {/* EPISODE TITLE – CENTER TOP */}
      {episode && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "24px",
            fontWeight: "600",
            background: "rgba(0,0,0,0.4)",
            padding: "8px 20px",
            borderRadius: "8px",
            zIndex: 20,
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {episode.title}
        </div>
      )}

      {/* LOADING / ERROR */}
      {!signedUrl && !error && (
        <p style={{ color: "white", fontSize: "24px" }}>Loading…</p>
      )}
      {error && <p style={{ color: "red", fontSize: "24px" }}>{error}</p>}

      {/* VIDEO */}
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
