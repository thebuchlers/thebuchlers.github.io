import InfiniteScrollImages from "@/components/InfiniteScrollImages";
import { useNavigate } from "react-router-dom";

const SHOWS = [
  "The Office",
  "Everybody Love Raymond",
  "Home Improvement",
  "Parks & Recreation",
  "The Fresh Prince of Belair",
  "That 70s Show",
  "King of Queens",
  "The Middle",
];

const Home = () => {
  const navigate = useNavigate();

  const images = Array.from(
    { length: 14 },
    (_, i) => `/assets/scrolling/${i + 1}.webp`
  ).sort(() => Math.random() - 0.5);

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      <main className="relative">
        {/* HERO SECTION */}
        <div className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
          <div className="absolute inset-0 h-full overflow-hidden z-0">
            <InfiniteScrollImages images={images} speed={50} />
          </div>

          {/* LEFT VIGNETTE */}
          <div className="absolute inset-0 z-10 bg-linear-to-r from-black/80 via-black/50 to-transparent" />

          {/* BOTTOM FADE */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 z-10 bg-linear-to-t from-black/80 to-transparent" />

          {/* BLUR BEHIND TEXT */}
          <div className="absolute inset-y-0 left-0 w-1/2 backdrop-blur-sm z-10 bg-black/20" />

          {/* HERO CONTENT */}
          <div className="absolute inset-0 z-20 flex items-end">
            <div className="max-w-3xl p-8 md:p-12 lg:p-20">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-4 drop-shadow-xl">
                Keeping Up with the Buchlers
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl drop-shadow-md">
                <strong>Keeping Up with the Buchlers</strong> follows the
                chaotic, funny, and heartwarming lives of the Buchler family in
                Louisville, Colorado — <strong>Matt</strong>, his Finnish
                chess-champion wife <strong>Mervi</strong>, their kids{" "}
                <strong>Matthew</strong>, <strong>Laila</strong>, and{" "}
                <strong>Lissy</strong>, plus their adventurous grandparents,{" "}
                <strong>Granny</strong> and <strong>Bob</strong>.
              </p>

              <div className="flex gap-3">
                <button
                  className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-md font-medium shadow hover:scale-105 transition"
                  onClick={() => navigate("/keeping-up-with-the-buchlers")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                  Play
                </button>

                <button
                  className="flex items-center gap-3 bg-gray-700/70 text-white px-5 py-3 rounded-md font-medium hover:bg-gray-600 transition"
                  onClick={() => navigate("/keeping-up-with-the-buchlers")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 7a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* POPULAR ROW */}
        <section className="pb-10 bg-linear-to-b from-transparent to-black">
          <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
            <h3 className="text-xl font-semibold mb-4">Popular on Netflix</h3>

            <div className="flex gap-4 overflow-x-auto pb-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="min-w-40 md:min-w-[200px] shrink-0">
                  <div
                    className="
                      w-[180px] h-[100px] 
                      md:w-[220px] md:h-[125px] 
                      bg-gray-800 rounded-md 
                      overflow-hidden flex items-center justify-center
                    "
                  >
                    <img
                      src={`./assets/thumb-${i}.png`}
                      alt={`thumb-${i}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-300 text-center">
                    {SHOWS[i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
