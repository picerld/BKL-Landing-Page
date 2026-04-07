import { useState } from "react";
import { Star } from "lucide-react";

function Card({ item }) {
  return (
    <div
      className="
        min-w-[280px] md:min-w-[320px]
        bg-white border-3 border-gray-100
        rounded-2xl p-6
        transition-all duration-500
        hover:shadow-md hover:border-green-700 cursor-pointer
      "
    >
      <div className="flex gap-1 mb-3 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        “{item.message}”
      </p>

      <div>
        <p className="font-bold text-gray-900 text-sm">{item.name}</p>
        <p className="text-xs text-gray-400">{item.role}</p>
      </div>
    </div>
  );
}

export default function TestimoniSection() {
  const [paused, setPaused] = useState(false);

  const testimonials = [
    {
      name: "PT Karya Infrastruktur",
      role: "Kontraktor Jalan",
      message:
        "Material yang dikirim sangat berkualitas dan selalu tepat waktu. Sangat membantu kelancaran proyek kami.",
    },
    {
      name: "CV Maju Bersama",
      role: "Developer Properti",
      message:
        "Pelayanan profesional dan respons cepat. Kami sudah bekerja sama lebih dari 2 tahun tanpa kendala.",
    },
    {
      name: "PT Nusantara Build",
      role: "Kontraktor Gedung",
      message:
        "Kapasitas produksi besar dan stabil. Cocok untuk proyek skala besar seperti kami.",
    },
  ];

  const loopData = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimoni" className="pb-16 overflow-hidden">
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-150 mx-auto pb-3">
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-gray-900">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-gray-500 mt-3">
            Kepercayaan klien adalah prioritas kami dalam setiap proyek.
          </p>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-6 w-max"
            style={{
              animation: `marquee 50s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {loopData.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-6 w-max"
            style={{
              animation: `marqueeReverse 50s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {loopData.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
}
