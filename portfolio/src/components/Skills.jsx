import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const { theme } = useTheme();
  const { language, translationData } = useLanguage();
  const t = translationData[language];

  const skills = [
    {
      name: "JAVASCRIPT",
      bgColor: "#F7DF1E",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      iconClass: "object-cover w-full h-full",
      noPadding: true,
    },
    {
      name: "REACT",
      bgColor: "#1C1C1C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      iconClass: "object-contain",
    },
    {
      name: "REDUX",
      bgColor: "#764ABC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      iconClass: "brightness-0 invert object-contain",
    },
    {
      name: "NODE",
      bgColor: "#1C1C1C",
      icon: "/node.jpg",
      iconClass: "object-cover w-full h-full", // Kutuyu tamamen kaplar, padding yok
      noPadding: true, // Padding'i kaldır
    },
    {
      name: "VS CODE",
      bgColor: "#007ACC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      iconClass: "brightness-0 invert object-contain",
    },
    {
      name: "FIGMA",
      bgColor: "#1C1C1C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      iconClass: "object-contain",
    },
  ];

  return (
    <section
      className={`w-full py-20 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#484148]" : "bg-white"
      }`}
    >
      {/* SAĞ ÜSTTE - İçi boş gri halka */}
      <div
        className={`absolute -top-12 right-1/4 w-32 h-32 rounded-full border-[21px] ${
          theme === "dark" ? "border-[#525252]" : "border-[#D9D9D9]"
        }`}
      ></div>

      {/* SOL TARAFTA - Koyu gri bant */}
      <div
        className={`absolute left-0 bottom-16 w-20 h-10 rounded-r-full ${
          theme === "dark" ? "bg-[#525252]" : "bg-[#D9D9D9]"
        }`}
      ></div>

      {/* SAĞ ALTTA - PEMBE ÇEMBER */}
      <div className="absolute -bottom-12 -right-8 w-24 h-24 rounded-full border-[15px] border-[#D81B60] opacity-90"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2
          className={`text-4xl font-normal text-center mb-16 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {t.skillsTitle}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3">
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center overflow-hidden ${
                  skill.noPadding ? "p-0" : "p-3"
                }`}
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={skill.iconClass}
                />
              </div>
              <p
                className={`text-xs font-medium tracking-widest transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
