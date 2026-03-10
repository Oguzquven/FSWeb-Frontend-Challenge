import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Random Jokes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      tags: ["react", "vercel", "axios", "router"],
      bgColor: theme === "dark" ? "#2D3436" : "#E3F2FD",
      textColor: theme === "dark" ? "#FFFFFF" : "#1A1A1A",
      tagBg: theme === "dark" ? "#3D4649" : "#FFFFFF",
      tagText: theme === "dark" ? "#FFFFFF" : "#37474F",
      screenImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
    {
      title: "Are you bored?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      tags: ["react", "redux", "axios", "router", "vercel"],
      bgColor: theme === "dark" ? "#3D5A56" : "#D4F5E9",
      textColor: theme === "dark" ? "#FFFFFF" : "#1A1A1A",
      tagBg: theme === "dark" ? "#4A6B66" : "#FFFFFF",
      tagText: theme === "dark" ? "#FFFFFF" : "#37474F",
      screenImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    },
  ];

  return (
    <section
      className={`w-full py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#484148]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Projects
        </h2>

        <div className="flex justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col relative"
              style={{
                width: "500px",
                backgroundColor: project.bgColor,
                borderRadius: "12px",
                padding: "32px",
                paddingBottom: "0",
              }}
            >
              {/* Başlık */}
              <h3
                className="mb-4"
                style={{
                  color: project.textColor,
                  fontFamily: "serif",
                  fontSize: "29px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                {project.title}
              </h3>

              {/* Açıklama */}
              <p
                className={`leading-relaxed mb-6 transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
                style={{ fontSize: "16px" }}
              >
                {project.description}
              </p>

              {/* Tag'ler */}
              <div className="flex flex-wrap mb-8" style={{ gap: "9px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full text-sm font-medium shadow-sm"
                    style={{
                      padding: "8px 16px",
                      height: "32px",
                      backgroundColor: project.tagBg,
                      color: project.tagText,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Linkler */}
              <div className="flex justify-between items-center mb-6">
                <a
                  href="#"
                  className="hover:underline"
                  style={{
                    color: theme === "dark" ? "#FFFFFF" : "#000000",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "150%",
                  }}
                >
                  View on Github
                </a>
                <a
                  href="#"
                  className="hover:underline flex items-center gap-2"
                  style={{
                    color: theme === "dark" ? "#FFFFFF" : "#000000",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "150%",
                  }}
                >
                  Go to app →
                </a>
              </div>

              {/* Laptop Mockup */}
              <div
                className="relative mt-auto"
                style={{ marginBottom: "-40px" }}
              >
                <div
                  className="relative"
                  style={{ width: "500px", height: "287px" }}
                >
                  {/* Laptop Görseli */}
                  <img
                    src="/laptop.png"
                    alt="MacBook"
                    className="w-full h-full object-contain"
                  />

                  {/* Ekran İçeriği */}
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      top: "15px",
                      left: "75px",
                      width: "351px",
                      height: "220px",
                    }}
                  >
                    <img
                      src={project.screenImage}
                      alt={project.title}
                      className="w-full h-full object-fill"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
