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

  return (
    <>
      <div className="min-h-screen bg-black text-white font-sans">
        {/* Hero */}
        <main className="relative">
          <div className="relative h-[65vh] md:h-[75vh] lg:h-[85vh]">
            <img
              src="./assets/hero2.png"
              alt="hero"
              className="w-full h-full object-cover brightness-[0.6] contrast-110 saturate-125"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent z-10" />

            <div className="absolute inset-0 z-20 flex items-end">
              <div className="max-w-3xl p-8 md:p-12 lg:p-20">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-wide mb-4 drop-shadow-lg">
                  Keeping Up with the Buchlers
                </h2>
                <p className="text-gray-200 max-w-xl mb-6 leading-relaxed">
                  A laugh-out-loud journey through decades of Buchler family
                  camcorder chaos. From backyard birthday parties to accidental
                  dance-offs, this nostalgic “mock sitcom” turns real home
                  videos into heartwarming comedy. No script — just pure,
                  unfiltered Buchler energy.
                </p>

                <div className="flex gap-3">
                  <button
                    className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-md font-medium shadow hover:scale-105 transition"
                    onClick={() => navigate("/keeping-up-with-the-buchlers")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
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
                      viewBox="0 0 20 20"
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

          {/* Row of thumbnails */}
          <section className="pb-10 bg-linear-to-b from-transparent to-black">
            <div className="max-w-6xl mx-auto px-6 -mt-12 z-10 relative">
              <h3 className="text-xl font-semibold mb-4">Popular on Netflix</h3>

              <div className="flex gap-4 overflow-x-auto pb-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="min-w-40 md:min-w-[200px] shrink-0">
                    <div
                      className="w-[180px] h-[100px] md:w-[220px] md:h-[125px] 
                                 bg-gray-800 rounded-md overflow-hidden flex items-center justify-center"
                    >
                      <img
                        src={`./assets/thumb-${i}.png`}
                        alt={`thumb12-${i}`}
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
    </>
  );
};

export default Home;
