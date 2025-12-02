import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buchlers = () => {
  const seasons = [
    {
      id: 1,
      name: "Season 1",
      episodes: [
        {
          id: 1,
          title: "Episode 1 September 1999",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%201%20September%201999",
        },
        {
          id: 2,
          title: "Episode 2 October 1999",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%202%20October%201999",
        },
        {
          id: 3,
          title: "Episode 3 November 1999",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%203%20November%201999",
        },
        {
          id: 4,
          title: "Episode 4 March 2000",
          description: "Family video archive.",
          image: "https://placehold.co/300x170?text=Episode%204%20March%202000",
        },
        {
          id: 5,
          title: "Episode 5 May 2000",
          description: "Family video archive.",
          image: "https://placehold.co/300x170?text=Episode%205%20May%202000",
        },
        {
          id: 6,
          title: "Episode 6 November 2000",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%206%20November%202000",
        },
        {
          id: 7,
          title: "Episode 7 February 2001",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%207%20February%202001",
        },
        {
          id: 8,
          title: "Episode 8 March 2001",
          description: "Family video archive.",
          image: "https://placehold.co/300x170?text=Episode%208%20March%202001",
        },
        {
          id: 9,
          title: "Episode 9 April 2001",
          description: "Family video archive.",
          image: "https://placehold.co/300x170?text=Episode%209%20April%202001",
        },
      ],
    },
    {
      id: 2,
      name: "Season 2",
      episodes: [
        {
          id: 1,
          title: "Episode 1 June 2001",
          description: "Family video archive.",
          image: "https://placehold.co/300x170?text=Episode%201%20June%202001",
        },
        {
          id: 2,
          title: "Episode 2 July 2001",
          description: "Family video archive.",
          image: "https://placehold.co/300x170?text=Episode%202%20July%202001",
        },
        {
          id: 3,
          title: "Episode 3 July 2001 (Pt 2)",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%203%20July%202001%20(pt%202)",
        },
        {
          id: 4,
          title: "Episode 4 October 2001",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%204%20October%202001",
        },
        {
          id: 5,
          title: "Episode 5 October 2001 (Pt 2)",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%205%20October%202001%20(pt%202)",
        },
        {
          id: 6,
          title: "Episode 6 October 2001 (Pt 3)",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%206%20October%202001%20(pt%203)",
        },
        {
          id: 7,
          title: "Episode 7 November 2001",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%207%20November%202001",
        },
        {
          id: 8,
          title: "Episode 8 December 2001",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%208%20December%202001",
        },
        {
          id: 9,
          title: "Episode 9 December 2001 (Pt 2)",
          description: "Family video archive.",
          image:
            "https://placehold.co/300x170?text=Episode%209%20December%202001%20(pt%202)",
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

  const handleWatch = (season: any, episode: any) => {
    setLastWatched({ season: season.id, episode: episode.id });
    localStorage.setItem("lastSeason", season.id);
    localStorage.setItem("lastEpisode", episode.id);

    navigate(`/watch?season=${season.name}&episode=${episode.title}`);
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
                    onClick={() => handleWatch(selectedSeason, ep)}
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
};

export default Buchlers;
