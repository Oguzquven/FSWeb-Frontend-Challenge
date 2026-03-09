import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="flex justify-between items-center px-16 py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="text-xl font-bold">
        <span className="text-red-500">{"<"}</span>
        <span>Amila</span>
        <span className="text-red-500">{"/>"}</span>
      </div>

      {/* Sağ taraf */}
      <div className="flex items-center gap-4">
        {/* Dark mode butonu */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        {/* Dil butonu */}
        <button onClick={toggleLanguage} className="text-sm font-medium">
          <span
            className={
              language === "TR" ? "text-pink-500 font-bold" : "text-gray-400"
            }
          >
            TÜRKÇE
          </span>
          <span className="mx-1 text-gray-400">/</span>
          <span
            className={
              language === "EN" ? "text-pink-500 font-bold" : "text-gray-400"
            }
          >
            ENGLISH
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
