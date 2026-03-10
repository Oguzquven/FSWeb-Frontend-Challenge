import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, translationData } = useLanguage();
  const t = translationData[language];

  // Data.js'den gelen satırlar - doğrudan kullan
  const subtitleLines = t.subtitleLines;

  // Title'ı data.js'den al (noktasız versiyon için)
  const rawTitle = t.title; // "Ben Almila." veya "I'm Almila."
  // Noktayı kaldır çünkü subtitleLines'ta var
  const titleText = rawTitle.replace(".", "");

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#2A262B]" : "bg-[#F4F4F4]"
      }`}
    >
      {/* Üst sol yarım daire */}
      <div
        className={`absolute -top-16 left-[30%] w-32 h-32 rounded-full transition-transform duration-700 hover:scale-110 hidden xl:block ${
          theme === "dark" ? "bg-[#525252]" : "bg-[#D9D9D9]"
        }`}
      ></div>

      {/* Alt sağ içi boş halka */}
      <div
        className={`absolute -bottom-20 right-1/4 w-32 h-32 rounded-full border-[21px] transition-transform duration-700 hover:scale-110 hidden xl:block ${
          theme === "dark" ? "border-[#525252]" : "border-[#D9D9D9]"
        }`}
      ></div>

      {/* Pembe bant - fotoğraf hizasında, sağda */}
      <div className="absolute right-0 bottom-32 sm:bottom-40 lg:bottom-48 w-16 sm:w-24 lg:w-32 h-10 sm:h-12 lg:h-14 bg-[#D81B60] rounded-l-full z-0 transition-all duration-500 hover:w-20 sm:hover:w-28 lg:hover:w-36"></div>

      <div className="relative z-10 w-full h-full min-h-screen flex flex-col">
        {/* Sağ üst kontroller */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 lg:right-16 flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`
                relative w-10 sm:w-12 h-5 sm:h-6 rounded-full transition-all duration-300 
                hover:scale-110 hover:shadow-lg hover:shadow-[#D81B60]/30
                active:scale-95 cursor-pointer
                ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-[#D81B60]"}
              `}
            >
              <span
                className={`
                  absolute top-0.5 w-4 sm:w-5 h-4 sm:h-5 rounded-full shadow-md transition-all duration-300 flex items-center justify-center
                  ${
                    theme === "dark"
                      ? "left-0.5 bg-[#1a1a1a] border border-gray-600"
                      : "right-0.5 bg-[#FCD34D]"
                  }
                `}
              >
                {theme === "dark" && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="#FCD34D"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </span>
            </button>

            <span
              className={`text-[10px] sm:text-xs font-medium tracking-wider transition-colors duration-300 hidden sm:block ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
            </span>
          </div>

          <span
            className={`hidden lg:block ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            |
          </span>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="group text-[10px] sm:text-xs font-medium tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="text-[#D81B60] font-bold group-hover:text-[#ff4081] transition-colors duration-300 relative">
              {language === "EN" ? "TÜRKÇE" : "ENGLISH"}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D81B60] transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span
              className={`mx-1 hidden lg:inline transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              } group-hover:text-[#D81B60]`}
            >
              {language === "EN" ? "'YE GEÇ" : "/ EN"}
            </span>
          </button>
        </div>

        {/* Hero içerik - Responsive ve tam ekran */}
        <div className="flex-1 flex flex-col lg:flex-row justify-center items-center w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 gap-8 sm:gap-10 lg:gap-8 pt-20 sm:pt-24">
          {/* Sol taraf - Metin */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 order-2 lg:order-1 lg:pl-4 xl:pl-8">
            {/* Greeting - data.js'den */}
            <p
              className={`text-lg sm:text-xl flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t.greeting}
            </p>

            {/* Başlık - data.js'deki subtitleLines'a göre düzenlenmiş */}
            <h1
              className={`text-[clamp(20px,4vw,38px)] sm:text-[clamp(24px,3.5vw,44px)] lg:text-[clamp(28px,3vw,48px)] font-normal leading-[1.25] sm:leading-[1.3] tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {subtitleLines.map((line, index) => (
                <span key={index} className="block">
                  {index === 0 ? (
                    // İlk satır: Title (pembe underline'lı) + devamı
                    <span className="relative inline">
                      <span className="relative inline-block">
                        {language === "EN" ? "I'm Almila." : "Ben Almila."}
                        <span className="absolute -bottom-1 right-14 w-[75%] h-[6px] sm:h-[21px] bg-[#D81B60] -z-10 rounded-sm"></span>
                      </span>
                      <span>
                        {" "}
                        {language === "EN"
                          ? "I'm a full-stack"
                          : "Full-stack developer"}
                      </span>
                    </span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            {/* Sosyal ikonlar */}
            <div
              className={`flex gap-4 sm:gap-5 mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <a
                href="#"
                className="transition-all duration-300 hover:text-[#D81B60] hover:scale-110 cursor-pointer"
              >
                in
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-[#D81B60] hover:scale-110 cursor-pointer"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            {/* Footer info - data.js'den: Biraz sağa kaydırıldı */}
            <div className="flex flex-col gap-1.5 sm:gap-2 mt-2 sm:mt-3 lg:pl-2">
              <p
                className={`text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.currently}{" "}
                <span className="text-[#D81B60] font-medium">
                  {t.freelancing}
                </span>{" "}
                {t.currentlyText}
              </p>
              <p
                className={`text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.inviteText}{" "}
                <a
                  href="mailto:pratamaiosi@gmail.com"
                  className="text-[#D81B60] underline hover:no-underline transition-all duration-300"
                >
                  pratamaiosi@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Sağ taraf - Fotoğraf: Responsive boyutlar */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-center lg:pl-8 xl:pl-16 items-center relative group order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="relative transition-all duration-500 group-hover:scale-105">
              {/* Pembe border/arka plan */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full bg-[#D81B60] rounded-[20px] sm:rounded-[28px] -z-10 transition-all duration-500 group-hover:-top-4 group-hover:-left-4 sm:group-hover:-top-6 sm:group-hover:-left-6"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                alt="Almila"
                className="rounded-[20px] sm:rounded-[28px] w-[200px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[360px] h-[260px] sm:h-[340px] md:h-[380px] lg:h-[400px] xl:h-[450px] object-cover relative z-10 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
