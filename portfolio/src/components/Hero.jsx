import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#2A262B]" : "bg-[#F4F4F4]"
      }`}
    >
      {/* Üst sol daire */}
      <div
        className={`absolute -top-16 left-1/3 w-32 h-32 rounded-full  ${
          theme === "dark" ? "bg-[#525252]" : "bg-[#D9D9D9]"
        }`}
      ></div>

      {/* Alt sağ içi boş halka */}
      <div
        className={`absolute -bottom-20 right-1/4 w-32 h-32 rounded-full border-[21px] ${
          theme === "dark" ? "border-[#525252]" : "border-[#D9D9D9]"
        }`}
      ></div>

      {/* Pembe bant */}
      <div className="absolute right-0 bottom-20 sm:bottom-24 lg:bottom-28 w-24 sm:w-28 lg:w-32 h-12 sm:h-14 bg-[#D81B60] rounded-l-full z-0"></div>

      <div className="relative z-10 w-full h-full min-h-screen flex flex-col">
        {/* Sağ üst kontroller */}
        <div className="absolute top-8 right-8 lg:right-16 flex items-center gap-4">
          {/* Switch Container */}
          <div className="flex items-center gap-3">
            {/* Switch Butonu */}
            <button
              onClick={toggleTheme}
              className={`
                relative w-12 h-6 rounded-full transition-colors duration-300
                ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-[#D81B60]"}
              `}
            >
              {/* Kayan Daire - Sarı top veya Ay */}
              <span
                className={`
                  absolute top-0.5 w-5 h-5 rounded-full shadow-md transition-all duration-300 flex items-center justify-center
                  ${
                    theme === "dark"
                      ? "left-0.5 bg-[#1a1a1a] border border-gray-600"
                      : "right-0.5 bg-[#FCD34D]"
                  }
                `}
              >
                {theme === "dark" && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#FCD34D"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </span>
            </button>

            {/* Yazı */}
            <span
              className={`text-xs font-medium tracking-wider ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
            </span>
          </div>

          <span
            className={`hidden sm:block ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            |
          </span>

          <button
            onClick={toggleLanguage}
            className="text-xs font-medium tracking-wide"
          >
            <span className="text-[#D81B60] font-bold">TÜRKÇE</span>
            <span
              className={`mx-1 hidden sm:inline ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              'YE GEÇ
            </span>
          </button>
        </div>

        {/* Hero içerik */}
        <div className="flex-1 flex flex-col lg:flex-row justify-center items-center px-6 sm:px-12 lg:px-16 xl:px-24 py-20 gap-12 lg:gap-8">
          {/* Sol taraf */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p
              className={`text-2xl flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Hi! <span className="text-3xl">👋</span>
            </p>

            <h1
              className={`text-[clamp(36px,3.5vw,52px)] font-normal leading-[1.2] ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="relative inline-block">
                I'm Almila.
                <span className="absolute -bottom-2 -left-2 w-[85%] h-[clamp(12px,1.5vw,20px)] bg-[#D81B60] -z-10 rounded-sm"></span>
              </span>{" "}
              I'm a full-stack
              <br />
              developer. I can craft solid and
              <br />
              scalable frontend products.
              <br />
              Let's meet!
            </h1>

            <div
              className={`flex gap-6 mt-4 text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <a href="#" className="hover:text-[#D81B60] transition-colors">
                in
              </a>
              <a href="#" className="hover:text-[#D81B60] transition-colors">
                <svg
                  className="w-9 h-9"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Currently{" "}
                <span className="text-[#D81B60] font-medium">Freelancing</span>{" "}
                for UX, UI, & Web Design Project.
              </p>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Invite me to join your team →{" "}
                <a
                  href="mailto:pratamaiosi@gmail.com"
                  className="text-[#D81B60] underline hover:no-underline"
                >
                  pratamaiosi@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Sağ taraf - Fotoğraf */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#D81B60] rounded-[36px] -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                alt="Almila"
                className="rounded-[36px] w-[300px] sm:w-[350px] lg:w-[320px] xl:w-[380px] h-[380px] sm:h-[440px] lg:h-[400px] xl:h-[480px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
