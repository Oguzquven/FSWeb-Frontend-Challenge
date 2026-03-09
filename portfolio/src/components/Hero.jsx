import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <section className="relative min-h-screen bg-[#F4F4F4] overflow-hidden">
      {/* Arka plan desenleri */}

      {/* Üst sol - Ekranın üstünden kesilmiş gri daire */}
      <div className="absolute -top-16 left-1/3 w-32 h-32 rounded-full bg-[#D1D5DB] opacity-50"></div>

      {/* Alt sağ - Alttan kesilmiş içi boş halka */}
      <div className="absolute -bottom-20 right-1/4 w-32 h-32 rounded-full border-[20px] border-[#D1D5DB] opacity-40"></div>

      {/* Ana içerik */}
      <div className="relative z-10 px-64 py-16">
        {/* Sağ üst kontroller */}
        <div className="absolute top-12 right-64 flex items-center gap-6">
          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-14 h-7 rounded-full relative transition-colors duration-300 bg-[#D81B60]"
            >
              <span
                className={`absolute top-1 w-5 h-5 rounded-full bg-[#FCD34D] shadow-md transition-transform duration-300 ${
                  isDark ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-xs font-medium text-gray-600 tracking-wider">
              DARK MODE
            </span>
          </div>
          <span className="text-gray-400">|</span>
          {/* Dil seçimi */}
          <button
            onClick={toggleLanguage}
            className="text-xs font-medium tracking-wide"
          >
            <span className="text-[#D81B60] font-bold">TÜRKÇE</span>
            <span className="mx-1 text-gray-400">'YE GEÇ</span>
          </button>
        </div>

        {/* Hero içerik */}
        <div className="flex justify-between items-center pt-40 gap-24">
          {/* Sol taraf */}
          <div className="w-[55%] flex flex-col gap-6">
            {/* Hi! yazısı */}
            <p className="text-2xl flex items-center gap-2 mb-4">
              Hi! <span className="text-3xl">👋</span>
            </p>

            {/* Başlık */}
            <h1 className="text-[50px] font-normal leading-[1.2] text-gray-900">
              <span className="relative inline-block">
                I'm Almila.
                <span className="absolute -bottom-2 -left-2 w-[85%] h-[20px] bg-[#D81B60] -z-10 rounded-sm"></span>
              </span>{" "}
              I'm a full-stack
              <br />
              developer. I can craft solid and
              <br />
              scalable frontend products.
              <br />
              Let's meet!
            </h1>

            {/* Sosyal ikonlar */}
            <div className="flex gap-6 mt-8 text-3xl font-bold text-black">
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

            {/* Alt yazılar */}
            <div className="flex flex-col gap-3 mt-6">
              <p className="text-lg text-gray-600">
                Currently{" "}
                <span className="text-[#D81B60] font-medium">Freelancing</span>{" "}
                for UX, UI, & Web Design Project.
              </p>
              <p className="text-lg text-gray-600">
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

          {/* Sağ taraf - Fotoğraf ve Dekoratif Şekil */}
          <div className="w-[45%] flex justify-center items-center relative">
            {/* Görsel ve arka kutu */}
            <div className="relative">
              {/* Arka pembe kutu */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#D81B60] rounded-[36px] -z-10"></div>

              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                alt="Almila"
                className="rounded-[36px] w-[320px] h-[400px] object-cover relative z-0"
              />
            </div>

            {/* Sağ alt dekoratif yuvarlak/pill - SAYFANIN SAĞINDAN ÇIKMIŞ GİBİ */}
            <div className="absolute -right-32 bottom-8 w-32 h-16 bg-[#D81B60] rounded-l-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
