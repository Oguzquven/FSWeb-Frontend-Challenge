import { useTheme } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-50 text-gray-900 min-h-screen"
      }
    >
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
