import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SEASONS, type Episode, type Season } from "./season.db";
import Aurora from "./Aurora";

const Buchlers = () => {
  const navigate = useNavigate();

  // Pull localStorage once
  const savedSeason = Number(localStorage.getItem("lastSeason"));
  const savedEpisode = Number(localStorage.getItem("lastEpisode"));

  // Initial season chosen once
  const initialSeason = useMemo(() => {
    return SEASONS.find((s) => s.id === savedSeason) || SEASONS[0];
  }, []);

  const [selectedSeason, setSelectedSeason] = useState(initialSeason);

  const [lastWatched, setLastWatched] = useState({
    season: savedSeason || null,
    episode: savedEpisode || null,
  });

  const handleWatch = (season: Season, episode: Episode) => {
    setLastWatched({ season: season.id, episode: episode.id });

    localStorage.setItem("lastSeason", String(season.id));
    localStorage.setItem("lastEpisode", String(episode.id));

    navigate(`/watch?seasonId=${season.id}&episodeId=${episode.id}`);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={["#E84855", "#FF9E80", "#F8C471"]}
        blend={0.45}
        amplitude={1.8}
        speed={0.8}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto">
        <h1 className="text-[40px] font-bold mb-3">
          Keeping up with The Buchlers
        </h1>

        <p className="text-[18px] text-gray-300 leading-relaxed mb-8">
          <strong>Keeping Up with the Buchlers</strong> follows the chaotic,
          funny, and heartwarming lives of the Buchler family in Louisville,
          Colorado — <strong>Matt</strong>, his Finnish chess-champion wife{" "}
          <strong>Mervi</strong>, their kids <strong>Matthew</strong>,{" "}
          <strong>Laila</strong>, and <strong>Lissy</strong>, plus grandparents{" "}
          <strong>Granny</strong> and <strong>Bob</strong>.
        </p>

        {/* Seasons */}
        <h2 className="text-[26px] font-semibold my-3">Seasons</h2>

        <div className="flex gap-3 overflow-x-auto pb-3">
          {SEASONS.map((season) => {
            const isActive = season.id === selectedSeason.id;

            return (
              <button
                key={season.id}
                onClick={() => setSelectedSeason(season)}
                className={`min-w-[120px] px-4 py-2 rounded-xl font-semibold whitespace-nowrap
                ${isActive ? "bg-red-600" : "bg-gray-700"} text-white`}
              >
                {season.name}
              </button>
            );
          })}
        </div>

        {/* Episodes */}
        <h2 className="text-[26px] font-semibold mt-6 mb-3">Episodes</h2>

        <div className="flex flex-col gap-5">
          {selectedSeason.episodes.map((ep) => {
            const isLast =
              lastWatched.season === selectedSeason.id &&
              lastWatched.episode === ep.id;

            return (
              <div key={ep.id}>
                {isLast && (
                  <div className="text-red-600 font-semibold py-2 border-b-2 border-red-600 mb-3">
                    Last Watched
                  </div>
                )}

                <div
                  className={`bg-[#111] p-4 rounded-xl flex gap-4 ${
                    isLast
                      ? "border-2 border-red-600"
                      : "border border-gray-800"
                  }`}
                >
                  <img
                    src={`/assets/episode-cards/${selectedSeason.id}/${ep.id}.webp`}
                    alt={ep.title}
                    className="w-[180px] h-[100px] object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <h3 className="text-[20px] font-semibold mb-1">
                      {ep.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-2">
                      {ep.description}
                    </p>

                    <button
                      onClick={() => handleWatch(selectedSeason, ep)}
                      className="px-4 py-2 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 transition"
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
