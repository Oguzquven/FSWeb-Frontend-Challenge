function Projects() {
  const projects = [
    {
      title: "Random Jokes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      tags: ["react", "vercel", "axios", "router"],
      bgColor: "#E3F2FD",
      textColor: "#1A1A1A",
      screenImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
    {
      title: "Are you bored?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      tags: ["react", "redux", "axios", "router", "vercel"],
      bgColor: "#D4F5E9",
      textColor: "#1A1A1A",
      screenImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
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
              {/* Başlık - Figma: Playfair Display, 29px, 700 */}
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

              {/* Açıklama - Figma: 16px */}
              <p
                className="text-gray-700 leading-relaxed mb-6"
                style={{ fontSize: "16px" }}
              >
                {project.description}
              </p>

              {/* Tag'ler - Figma: Hug 270x32, gap 9px */}
              <div
                className="flex flex-wrap mb-8"
                style={{ gap: "9px" }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                    style={{
                      padding: "8px 16px",
                      height: "32px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Linkler - Figma: Inter, 20px, 600 */}
              <div className="flex justify-between items-center mb-6">
                <a
                  href="#"
                  className="hover:underline"
                  style={{
                    color: "#000000",
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
                    color: "#000000",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "150%",
                  }}
                >
                  Go to app →
                </a>
              </div>

              {/* Laptop Mockup - Sizin ayarlarınız korundu */}
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

                  {/* Ekran İçeriği - Sizin ayarlarınız */}
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