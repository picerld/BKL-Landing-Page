import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

export default function ProductSection() {
  const products = [
    {
      name: "Batu Split",
      desc: "Material utama untuk konstruksi jalan dan beton dengan kualitas tinggi.",
      image:
        "https://images.unsplash.com/photo-1651672397008-01d088f4a9f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhbWJhbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Batu Screening",
      desc: "Digunakan sebagai bahan campuran aspal dan dasar konstruksi.",
      image:
        "https://images.unsplash.com/photo-1523848309072-c199db53f137?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFtYmFuZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Batu Boulder",
      desc: "Cocok untuk proyek penahan tanah dan konstruksi berat.",
      image:
        "https://images.unsplash.com/photo-1680463990599-9d318aaecf71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFtYmFuZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Pasir Batu",
      desc: "Material halus untuk campuran beton dan finishing konstruksi.",
      image:
        "https://images.unsplash.com/photo-1600363503477-a8d1d6d57dfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRhbWJhbmd8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section
      id="products"
      className="max-w-7xl mx-auto px-5 md:px-10 lg:px-18.75 pb-16"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-gray-900">
              Produk Kami
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Berbagai pilihan material tambang berkualitas tinggi untuk
              mendukung proyek konstruksi Anda.
            </p>
          </div>

          <Button
            as="a"
            href="#contact"
            variant="outline"
            icon={<ArrowRight size={18} />}
          >
            Konsultasi Material
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.name}
              className="
                group relative overflow-hidden rounded-2xl
                border border-gray-100 bg-white
                hover:border-gray-300 transition-all duration-300
                cursor-pointer
              "
            >
              <div className="relative h-55 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-105
                    transition duration-500
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  Best Quality
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

                <a
                  href="#contact"
                  className="
                    inline-flex items-center gap-1
                    text-sm font-semibold text-green-700
                    group-hover:gap-2
                    transition-all
                  "
                >
                  Lihat Detail
                  <ArrowRight size={16} />
                </a>
              </div>

              <div
                className="
                  absolute inset-0 bg-black/0
                  group-hover:bg-black/5
                  transition
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
