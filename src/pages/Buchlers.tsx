import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SEASONS, type Episode, type Season } from "./season.db";

const Buchlers = () => {
  const savedSeason = localStorage.getItem("lastSeason");
  const savedEpisode = localStorage.getItem("lastEpisode");

  const initialSeason = useMemo(() => {
    return SEASONS.find((s) => s.id === Number(savedSeason)) || SEASONS[0];
  }, [savedSeason]);

  const [selectedSeason, setSelectedSeason] = useState(initialSeason);
  const [lastWatched, setLastWatched] = useState({
    season: savedSeason ? Number(savedSeason) : null,
    episode: savedEpisode ? Number(savedEpisode) : null,
  });

  const navigate = useNavigate();

  const handleWatch = (season: Season, episode: Episode) => {
    setLastWatched({ season: season.id, episode: episode.id });
    localStorage.setItem("lastSeason", String(season.id));
    localStorage.setItem("lastEpisode", String(episode.id));

    navigate(`/watch?season=${season.name}&episode=${episode.name}`);
  };

  // ----- Styles -----
  const styles = {
    page: {
      minHeight: "100vh",
      background: "#000",
      color: "white",
      padding: "24px",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
    },
    title: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "12px",
    },
    description: {
      fontSize: "18px",
      color: "#ccc",
      lineHeight: 1.6,
      marginBottom: "32px",
    },
    sectionTitle: {
      fontSize: "26px",
      fontWeight: 600,
      margin: "12px 0",
    },
    seasonsList: {
      display: "flex",
      gap: "12px",
      overflowX: "auto" as const,
      paddingBottom: "12px",
    },
    seasonButton: (active: boolean): React.CSSProperties => ({
      minWidth: "120px",
      padding: "10px 16px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
      background: active ? "#e50914" : "#333",
      color: "white",
    }),
    episodeCard: (active: boolean): React.CSSProperties => ({
      background: "#111",
      padding: "16px",
      borderRadius: "12px",
      border: active ? "2px solid #e50914" : "1px solid #222",
      display: "flex",
      gap: "16px",
    }),
    lastWatched: {
      color: "#e50914",
      fontWeight: 600,
      padding: "8px 0",
      borderBottom: "2px solid #e50914",
      marginBottom: "12px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Keeping up with The Buchlers</h1>

        <p style={styles.description}>
          <strong>Keeping Up with the Buchlers</strong> follows the chaotic,
          funny, and heartwarming lives of the Buchler family in Louisville,
          Colorado — <strong>Matt</strong>, his Finnish chess-champion wife{" "}
          <strong>Mervi</strong>, their kids <strong>Matthew</strong>,{" "}
          <strong>Laila</strong>, and <strong>Lissy</strong>, plus grandparents{" "}
          <strong>Granny</strong> and <strong>Bob</strong>.
        </p>

        {/* Seasons */}
        <h2 style={styles.sectionTitle}>Seasons</h2>
        <div style={styles.seasonsList}>
          {SEASONS.map((season) => (
            <button
              key={season.id}
              onClick={() => setSelectedSeason(season)}
              style={styles.seasonButton(season.id === selectedSeason.id)}
            >
              {season.name}
            </button>
          ))}
        </div>

        {/* Episodes */}
        <h2 style={{ ...styles.sectionTitle, marginTop: "24px" }}>Episodes</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {selectedSeason.episodes.map((ep) => {
            const isLast =
              lastWatched.season === selectedSeason.id &&
              lastWatched.episode === ep.id;

            return (
              <div key={ep.id}>
                {isLast && <div style={styles.lastWatched}>Last Watched</div>}

                <div style={styles.episodeCard(isLast)}>
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
                        fontWeight: 600,
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
                        fontWeight: 600,
                        color: "white",
                      }}
                    >
                      {isLast ? "Resume" : "Play"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Buchlers;
