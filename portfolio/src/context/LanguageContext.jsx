import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import data from "../data/data";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "EN",
  );
  const [translationData, setTranslationData] = useState(data);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2", {
        headers: { "x-api-key": "reqres_60e76c3b6dc94aa3a33a3abdeb3eda29" },
      })
      .then((res) => {
        console.log("API yanıtı:", res.data);
        setTranslationData(data);
      })
      .catch((err) => {
        console.error("API hatası:", err);
        setTranslationData(data);
      });
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "TR" ? "EN" : "TR";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translationData }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
