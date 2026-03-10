function Profile() {
  return (
    <section className="relative py-16 px-16 bg-[#F4F4F4] overflow-hidden">
      {/* SAĞ ÜSTTE - PEMBE HALKA */}
      <div className="absolute -top-12 -right-8 w-24 h-24 rounded-full border-[15px] border-[#D81B60]"></div>

      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 relative z-10">
        Profile
      </h2>

      <div className="flex gap-8 max-w-5xl mx-auto items-start relative z-10">
        {/* Sol - Bilgi tablosu */}
        <div
          className="bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]"
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
              <span className="text-gray-900 font-semibold w-36">
                Doğum tarihi
              </span>
              <span className="text-gray-900">24.03.1996</span>
            </div>
            <div className="flex gap-12">
              <span className="text-gray-900 font-semibold w-36">
                İkamet Şehri
              </span>
              <span className="text-gray-900">Ankara</span>
            </div>
            <div className="flex gap-12">
              <span className="text-gray-900 font-semibold w-36">
                Eğitim Durumu
              </span>
              <span className="text-gray-900">
                Hacettepe Ünv. Biyoloji
                <br />
                Lisans, 2016
              </span>
            </div>
            <div className="flex gap-12">
              <span className="text-gray-900 font-semibold w-36">
                Tercih Ettiği Rol
              </span>
              <span className="text-gray-900">Frontend, UI</span>
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
            <h3 className="text-gray-900 text-lg font-normal relative z-10">
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
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
