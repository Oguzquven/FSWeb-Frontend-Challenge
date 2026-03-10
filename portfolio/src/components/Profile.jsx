import { useTheme } from "../context/ThemeContext";

function Profile() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative py-16 px-16 overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#2A262B]" : "bg-[#F4F4F4]"
      }`}
    >
      {/* SAĞ ÜSTTE - PEMBE HALKA */}
      <div className="absolute -top-12 -right-8 w-24 h-24 rounded-full border-[15px] border-[#D81B60]"></div>

      <h2
        className={`text-4xl font-bold text-center mb-12 relative z-10 transition-colors duration-300 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Profile
      </h2>

      <div className="flex gap-8 max-w-5xl mx-auto items-start relative z-10">
        {/* Sol - Bilgi tablosu */}
        <div
          className={`p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] transition-colors duration-300 ${
            theme === "dark" ? "bg-[#525252]" : "bg-white"
          }`}
          style={{
            width: "508px",
            minHeight: "322px",
            borderRadius: "12px",
          }}
        >
          <h3
            className="text-[#D81B60] text-2xl font-normal mb-8"
            style={{ fontFamily: "serif", fontStyle: "italic" }}
          >
            Basic Information
          </h3>

          <div className="flex flex-col gap-5 text-lg">
            <div className="flex gap-12">
              <span
                className={`font-semibold w-36 transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Doğum tarihi
              </span>
              <span
                className={`transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}
              >
                24.03.1996
              </span>
            </div>
            <div className="flex gap-12">
              <span
                className={`font-semibold w-36 transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                İkamet Şehri
              </span>
              <span
                className={`transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Ankara
              </span>
            </div>
            <div className="flex gap-12">
              <span
                className={`font-semibold w-36 transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Eğitim Durumu
              </span>
              <span
                className={`transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Hacettepe Ünv. Biyoloji
                <br />
                Lisans, 2016
              </span>
            </div>
            <div className="flex gap-12">
              <span
                className={`font-semibold w-36 transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Tercih Ettiği Rol
              </span>
              <span
                className={`transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Frontend, UI
              </span>
            </div>
          </div>
        </div>

        {/* Sağ - Hakkında yazısı */}
        <div
          className="p-6"
          style={{
            width: "476px",
            minHeight: "241px",
            borderRadius: "4px",
          }}
        >
          <div className="relative inline-block mb-4">
            <h3
              className={`text-lg font-normal relative z-10 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              About me
            </h3>
            <div
              className="absolute bottom-0 -left-1 h-3 -z-0"
              style={{
                backgroundColor: "#82B1FF",
                borderRadius: "4px",
                width: "85%",
                transform: "translateY(2px)",
              }}
            ></div>
          </div>
          <p
            className={`text-lg leading-relaxed mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p
            className={`text-lg leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
