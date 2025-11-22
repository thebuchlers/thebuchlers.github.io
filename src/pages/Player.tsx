import { useNavigate, useSearchParams } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const season = searchParams.get("season");
  const episode = searchParams.get("episode");

  // Example: Map episodes to YouTube URLs
  const videoMap: Record<string, string> = {
    "1-1": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "1-2": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "1-3": "https://www.youtube.com/embed/tVj0ZTS4WF4",
    "2-1": "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    "2-2": "https://www.youtube.com/embed/9bZkp7q19f0",
    "2-3": "https://www.youtube.com/embed/l482T0yNkeo",
  };

  const key = `${season}-${episode}`;
  const videoUrl = videoMap[key];

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

      {/* Simple YouTube Player */}
      <iframe
        src={videoUrl + "?autoplay=1&controls=1"}
        allow="autoplay; encrypted-media"
        style={{
          width: "90vw",
          height: "50vw",
          maxHeight: "80vh",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default Player;