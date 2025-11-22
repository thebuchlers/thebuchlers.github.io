import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Buchlers() {
  const seasons = [
    {
      id: 1,
      name: "Season 1",
      episodes: [
        {
          id: 1,
          title: "Episode 1: The Beginning",
          description: "A new chapter begins.",
          image: "https://placehold.co/300x170?text=Episode+1",
        },
        {
          id: 2,
          title: "Episode 2: Reckoning",
          description: "Conflicts rise.",
          image: "https://placehold.co/300x170?text=Episode+2",
        },
        {
          id: 3,
          title: "Episode 3: The Betrayal",
          description: "A shocking twist changes everything.",
          image: "https://placehold.co/300x170?text=Episode+3",
        },
        {
          id: 4,
          title: "Episode 4: Hidden Truths",
          description: "Secrets from the past come to light.",
          image: "https://placehold.co/300x170?text=Episode+4",
        },
      ],
    },
    {
      id: 2,
      name: "Season 2",
      episodes: [
        {
          id: 1,
          title: "Episode 1: Return",
          description: "A new chapter begins.",
          image: "https://placehold.co/300x170?text=Episode+1",
        },
        {
          id: 2,
          title: "Episode 2: Reckoning",
          description: "Conflicts rise.",
          image: "https://placehold.co/300x170?text=Episode+2",
        },
        {
          id: 3,
          title: "Episode 3: Into the Fire",
          description: "The Buchlers face their biggest challenge yet.",
          image: "https://placehold.co/300x170?text=Episode+3",
        },
        {
          id: 4,
          title: "Episode 4: The Final Stand",
          description: "Everything builds to an explosive showdown.",
          image: "https://placehold.co/300x170?text=Episode+4",
        },
      ],
    },
  ];

  const savedSeasonId =
    typeof window !== "undefined" ? localStorage.getItem("lastSeason") : null;
  const savedEpisodeId =
    typeof window !== "undefined" ? localStorage.getItem("lastEpisode") : null;

  const initialSeason = savedSeasonId
    ? seasons.find((s) => s.id === Number(savedSeasonId)) || seasons[0]
    : seasons[0];

  const [selectedSeason, setSelectedSeason] = useState(initialSeason);
  const [lastWatched, setLastWatched] = useState({
    season: savedSeasonId ? Number(savedSeasonId) : null,
    episode: savedEpisodeId ? Number(savedEpisodeId) : null,
  });

  const navigate = useNavigate();

  const handleWatch = (seasonId: any, episodeId: any) => {
    setLastWatched({ season: seasonId, episode: episodeId });
    localStorage.setItem("lastSeason", seasonId);
    localStorage.setItem("lastEpisode", episodeId);

    navigate(`/watch?season=${seasonId}&episode=${episodeId}`);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "12px" }}
        >
          Keeping up with The Buchlers
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#ccc",
            lineHeight: "1.6",
            marginBottom: "32px",
          }}
        >
          <strong>Keeping Up with the Buchlers</strong> follows the chaotic,
          funny, and heartwarming lives of the Buchler family in Louisville,
          Colorado—
          <strong>Matt</strong>, his Finnish chess-champion wife{" "}
          <strong>Mervi</strong>, their kids <strong>Matthew</strong>,{" "}
          <strong>Laila</strong>, and
          <strong> Lissy</strong>, plus the adventurous grandparents,
          <strong> Granny</strong> and <strong>Bob</strong>.
        </p>

        <h2
          style={{ fontSize: "26px", fontWeight: "600", marginBottom: "12px" }}
        >
          Seasons
        </h2>
        <div
          style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            paddingBottom: "12px",
          }}
        >
          {seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => setSelectedSeason(season)}
              style={{
                minWidth: "120px",
                padding: "10px 16px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                background:
                  selectedSeason.id === season.id ? "#e50914" : "#333",
                color: "white",
              }}
            >
              {season.name}
            </button>
          ))}
        </div>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: "600",
            marginBottom: "12px",
            marginTop: "24px",
          }}
        >
          Episodes
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {selectedSeason.episodes.map((ep) => (
            <div key={ep.id}>
              {lastWatched.season === selectedSeason.id &&
                lastWatched.episode === ep.id && (
                  <div
                    style={{
                      color: "#e50914",
                      fontWeight: "600",
                      padding: "8px 0",
                      borderBottom: "2px solid #e50914",
                      marginBottom: "12px",
                    }}
                  >
                    Last Watched
                  </div>
                )}

              <div
                style={{
                  background: "#111",
                  padding: "16px",
                  borderRadius: "12px",
                  border:
                    lastWatched.season === selectedSeason.id &&
                    lastWatched.episode === ep.id
                      ? "2px solid #e50914"
                      : "1px solid #222",
                  display: "flex",
                  gap: "16px",
                }}
              >
                <img
                  src={ep.image}
                  alt={ep.title}
                  style={{
                    width: "180px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    {ep.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#aaa",
                      marginBottom: "10px",
                    }}
                  >
                    {ep.description}
                  </p>

                  <button
                    onClick={() => handleWatch(selectedSeason.id, ep.id)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      border: "none",
                      background: "#e50914",
                      cursor: "pointer",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    {lastWatched.episode === ep.id &&
                    lastWatched.season === selectedSeason.id
                      ? "Resume"
                      : "Play"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
