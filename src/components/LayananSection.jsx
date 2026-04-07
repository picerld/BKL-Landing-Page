import { MessageCircle, Briefcase, Truck, Map } from "lucide-react";
import Button from "./ui/Button";

export default function LayananSection() {
  const services = [
    {
      title: "Konsultasi",
      desc: "Dapatkan rekomendasi material dan solusi terbaik sesuai kebutuhan proyek Anda.",
      icon: MessageCircle,
    },
    {
      title: "Manajemen Proyek",
      desc: "Kami membantu mengelola distribusi dan kebutuhan material agar proyek berjalan efisien.",
      icon: Briefcase,
    },
    {
      title: "Pengadaan Material",
      desc: "Penyediaan material tambang berkualitas dengan stok stabil dan harga kompetitif.",
      icon: Truck,
    },
    {
      title: "Survey Lokasi",
      desc: "Analisis lokasi proyek untuk menentukan kebutuhan material secara akurat.",
      icon: Map,
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-5 md:px-10 lg:px-18.75 pb-16"
    >
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-160 mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-gray-900">
            Layanan Kami
          </h2>
          <p className="text-gray-500 mt-3">
            Kami menyediakan berbagai layanan profesional untuk mendukung
            kebutuhan proyek tambang dan konstruksi Anda secara menyeluruh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex gap-5 p-6
                  bg-white rounded-2xl
                  border border-gray-100
                  hover:border-gray-300
                  transition-all duration-300
                  group cursor-pointer
                "
              >
                <div
                  className="
                    w-20 h-14 flex items-center justify-center
                    rounded-xl bg-green-100
                    group-hover:bg-green-700
                    transition-all duration-500
                  "
                >
                  <Icon
                    size={26}
                    className="
                      text-green-700
                      group-hover:text-white
                      transition
                    "
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>

                  <a
                    href="#"
                    className="
                      text-sm font-semibold text-green-700
                      mt-2 inline-flex items-center gap-1
                      hover:underline
                    "
                  >
                    Pelajari Lebih Lanjut →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-green-50 border border-green-100 rounded-2xl px-6 py-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">
              Butuh bantuan memilih layanan?
            </h4>
            <p className="text-sm text-gray-500">
              Tim kami siap membantu Anda menentukan solusi terbaik.
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline">Konsultasi Gratis</Button>
            <Button as="a" href="#contact" variant="primary">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
