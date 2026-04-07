import {
  Mail,
  Phone,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import Button from "./ui/Button";

function InputField({ label, icon, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div
        className="
          flex items-center border border-gray-200 rounded-lg px-3
          transition-all
          focus-within:ring-2 focus-within:ring-green-500
          hover:border-green-400
        "
      >
        <div className="text-gray-400">{icon}</div>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-2 py-3 text-sm outline-none"
        />
      </div>
    </div>
  );
}

function TextareaField({ label, icon, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div
        className="
          flex items-start border border-gray-200 rounded-lg px-3
          transition-all
          focus-within:ring-2 focus-within:ring-green-500
          hover:border-green-400
        "
      >
        <div className="text-gray-400 mt-3">{icon}</div>
        <textarea
          placeholder={placeholder}
          rows="4"
          className="w-full px-2 py-3 text-sm outline-none resize-none"
        />
      </div>
    </div>
  );
}

function InfoItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-gray-300">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 overflow-hidden">
          <div
            className="
              relative text-white
              flex flex-col justify-between
              p-8 md:px-12 md:py-20
              min-h-125
              bg-cover bg-center bg-no-repeat
              overflow-hidden
            "
            style={{
              backgroundImage: "url('/assets/images/personal/hero.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#110E24]/90 via-[#110E24]/75 to-[#110E24]/85" />

            <div className="absolute inset-0 bg-[#110E24]/30 mix-blend-multiply" />

            <div className="relative z-10 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow-md">
                  Hubungi Kami
                </h2>
                <p className="text-gray-200 mt-2 max-w-md drop-shadow-sm">
                  Konsultasikan kebutuhan material tambang dan proyek Anda
                  bersama tim profesional kami.
                </p>
              </div>

              <div className="flex flex-col gap-4 text-sm">
                <InfoItem icon={<Phone size={18} />} text="+62 812-3456-7890" />
                <InfoItem icon={<Mail size={18} />} text="info@bklquarry.com" />
                <InfoItem
                  icon={<MapPin size={18} />}
                  text="Bandung, Indonesia"
                />
                <InfoItem
                  icon={<Clock size={18} />}
                  text="Senin - Sabtu, 08.00 - 17.00"
                />
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <div className="border-t border-white/20" />

              <p className="text-sm text-gray-300">Butuh respon cepat?</p>

              <div className="flex gap-3 flex-wrap">
                <button
                  className="
        px-5 py-2.5 rounded-full
        text-white text-sm font-medium
        bg-white/10 hover:bg-white/20
        border border-white/20
        backdrop-blur-sm
        transition-all duration-200 cursor-pointer
      "
                >
                  Konsultasi Gratis
                </button>

                <Button
                  as="a"
                  href="https://wa.me/628123456789"
                  target="_blank"
                  icon={<Phone size={16} />}
                >
                  WhatsApp Kami
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 flex flex-col gap-8">
            <form className="flex flex-col gap-5">
              <InputField
                label="Nama Lengkap"
                icon={<User size={18} />}
                placeholder="Masukkan nama Anda"
              />

              <InputField
                label="Email"
                icon={<Mail size={18} />}
                placeholder="Masukkan email Anda"
                type="email"
              />

              <TextareaField
                label="Pesan"
                icon={<MessageSquare size={18} />}
                placeholder="Tulis kebutuhan atau pertanyaan Anda..."
              />

              <div className="flex justify-end">
                <Button variant="primary" icon={<Send size={16} />}>
                  Kirim Pesan
                </Button>
              </div>
            </form>

            <div className="flex flex-col gap-3 pt-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-800">
                  Lokasi Kami
                </p>
                <a
                  href="https://maps.google.com/?q=Bandung"
                  target="_blank"
                  className="text-sm text-green-700 font-medium hover:underline"
                >
                  Lihat di Google Maps →
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition">
                <iframe
                  src="https://www.google.com/maps?q=Bandung&output=embed"
                  className="w-full h-[220px] border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
