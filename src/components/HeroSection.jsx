import { Calendar, ChevronRight } from "lucide-react";
import Button from "./ui/Button";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="max-w-7xl w-full overflow-hidden mx-auto"
    >
      <div className="px-18.75 pt-20 flex justify-between items-center gap-15">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-3.5">
            <h1
              className="text-[68px] leading-none font-bold text-gray-900 min-h-35"
              style={{
                letterSpacing: "-0.01em",
              }}
            >
              Tambang Batu
              <br />
              <span className="text-[#1a6b2e]">Berkualitas</span>
              <br />
              <span className="text-gray-800 font-semibold text-[52px]">
                Untuk Indonesia.
              </span>
            </h1>
            <p className="font-medium text-gray-500 text-[16px] leading-[1.7] max-w-[440px] border-l-[3px] border-[#1a6b2e] pl-[14px]">
              Kami menyediakan material tambang batu pilihan untuk mendukung
              proyek infrastruktur, konstruksi, dan pengembangan wilayah Anda
              secara menyeluruh.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              as="a"
              href="#best-choices"
              variant="outline"
              icon={<ChevronRight size={18} />}
            >
              Mulai Sekarang
            </Button>

            <Button as="a" href="#contact" variant="primary" icon={<Calendar size={18} />}>
              Jadwalkan Demo
            </Button>
          </div>
          <div className="flex gap-[36px] pt-[4px] border-t border-gray-100">
            {[
              { num: "15+", label: "Tahun Pengalaman" },
              { num: "500K", label: "Ton Material/Thn" },
              { num: "200+", label: "Klien Setia" },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-[2px]">
                <span className="text-[26px] font-extrabold text-gray-900 leading-none">
                  {num}
                </span>
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[500px] h-[550px] shrink-0 overflow-hidden relative rounded-[40px]">
          <img
            src="/assets/images/personal/hero.jpg"
            className="w-full h-full object-cover"
            alt="Operasi Tambang Batu"
            style={{ filter: "brightness(0.88) saturate(0.9)" }}
          />

          <div
            className="absolute inset-0 rounded-[40px]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)",
            }}
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 flex justify-between items-center shadow-sm">
            <div>
              <p className="text-[11px] font-semibold text-gray-400 mb-1.5">
                Kapasitas Produksi
              </p>
              <p className="text-[22px] font-extrabold text-gray-900 leading-none">
                1.500 Ton/Hari
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[11px] font-semibold text-gray-400 mb-1.5">
                Lokasi Aktif
              </p>
              <p className="text-[22px] font-extrabold text-[#1a6b2e] leading-none">
                99+ Wilayah
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
