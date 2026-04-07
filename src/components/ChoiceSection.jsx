import { Gem, Truck, Factory, Users } from "lucide-react";

export default function ChoiceSection() {
  const features = [
    {
      title: "Material Berkualitas Tinggi",
      desc: "Kami menyediakan batu pilihan dengan standar kualitas terbaik untuk memastikan kekuatan dan ketahanan proyek Anda.",
      icon: Gem,
    },
    {
      title: "Pengiriman Tepat Waktu",
      desc: "Distribusi material yang cepat dan terjadwal untuk menjaga kelancaran proyek tanpa hambatan.",
      icon: Truck,
    },
    {
      title: "Kapasitas Produksi Besar",
      desc: "Mampu memenuhi kebutuhan proyek skala kecil hingga besar dengan pasokan yang stabil.",
      icon: Factory,
    },
    {
      title: "Tim Profesional & Berpengalaman",
      desc: "Didukung oleh tenaga ahli berpengalaman di bidang pertambangan dan konstruksi.",
      icon: Users,
    },
  ];

  return (
    <section
      id="best-choices"
      className="max-w-7xl mx-auto px-5 md:px-10 lg:px-18.75 py-16"
    >
      <div className="flex flex-col gap-10">
        <div className="text-center max-w-150 mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-gray-900">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-gray-500 mt-3">
            Solusi material tambang terpercaya untuk mendukung proyek Anda dari
            awal hingga selesai.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex flex-col gap-6 p-6
                  bg-white rounded-2xl
                  border border-gray-100
                  hover:bg-green-900
                  hover:-translate-y-1 hover:shadow-lg
                  group transition-all duration-300 cursor-pointer
                "
              >
                <div
                  className="
                  w-12 h-12 flex items-center justify-center
                  rounded-lg bg-green-100
                  group-hover:bg-white/10
                  transition
                "
                >
                  <Icon
                    size={24}
                    className="
                      text-green-700
                      group-hover:text-white
                      transition
                    "
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 group-hover:text-green-100 transition">
                    {item.desc}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-sm font-semibold text-green-700 group-hover:text-white transition"
                >
                  Pelajari Lebih Lanjut →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
