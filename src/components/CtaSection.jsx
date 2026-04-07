import { Phone, ArrowRight } from "lucide-react";
import Button from "./ui/Button";

export function CTASection() {
  return (
    <section className="px-5 md:px-10 lg:px-18.75 pb-20 pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-4xl bg-black text-white p-8 md:p-12">
          <img
            src="/assets/images/personal/hero.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            alt="bg"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Siap Memulai Proyek Anda?
              </h2>
              <p className="text-gray-300 mt-3">
                Konsultasikan kebutuhan material tambang Anda sekarang dan
                dapatkan solusi terbaik dari tim kami.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button
                as="a"
                href="#contact"
                variant="secondary"
                icon={<ArrowRight size={18} />}
              >
                Konsultasi Sekarang
              </Button>

              <Button
                as="a"
                href="https://wa.me/628123456789"
                target="_blank"
                icon={<Phone size={18} />}
              >
                WhatsApp Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
