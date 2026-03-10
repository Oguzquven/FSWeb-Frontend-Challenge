function Footer() {
  return (
    <footer className="w-full bg-white py-20 flex justify-center">
      <div
        className="flex justify-between items-start"
        style={{
          width: "758px",
          height: "137px",
        }}
      >
        {/* Sol taraf - Başlık */}
        <div style={{ width: "540px" }}>
          <h2
            className="leading-tight"
            style={{
              color: "#1A1A1A",
              fontSize: "42px",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0.01em",
            }}
          >
            Let's{" "}
            <span className="relative inline-block" style={{ zIndex: 1 }}>
              work together
              {/* Mavi arka plan çizgisi - sağa kaydırılmış */}
              <span
                style={{
                  position: "absolute",
                  left: "20px",
                  bottom: "-7px",
                  width: "95%",
                  height: "15px",
                  backgroundColor: "#82B1FF",
                  borderRadius: "4px",
                  zIndex: -1,
                }}
              ></span>
            </span>{" "}
            on your next product.
          </h2>
        </div>

        {/* Sağ taraf - Linkler */}
        <div className="flex flex-col gap-2" style={{ width: "150px" }}>
          <a
            href="#"
            className="hover:underline"
            style={{
              color: "#4A90E2",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "150%",
            }}
          >
            Github
          </a>
          <a
            href="#"
            className="hover:underline"
            style={{
              color: "#1A1A1A",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "150%",
            }}
          >
            Personal Blog
          </a>
          <a
            href="#"
            className="hover:underline"
            style={{
              color: "#0077B5",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "150%",
            }}
          >
            Linkedin
          </a>
          <a
            href="#"
            className="hover:underline"
            style={{
              color: "#D81B60",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "150%",
            }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
