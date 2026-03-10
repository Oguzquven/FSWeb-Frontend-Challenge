import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import data from "../data/data";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("EN");
  const [translationData, setTranslationData] = useState(data);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", data)
      .then((res) => {
        console.log("API yanıtı:", res.data);
        setTranslationData(data);
      })
      .catch((err) => {
        console.error("API hatası:", err);
        setTranslationData(data);
      });
  }, []);

  const toggleLanguage = () => setLanguage(language === "TR" ? "EN" : "TR");

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
