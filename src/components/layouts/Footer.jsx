import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-18.75 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-5">
            <img
              src="https://bklquarry.com/wp-content/uploads/2024/03/header.png"
              className="w-50 object-contain invert brightness-200"
              alt="logo"
            />

            <p className="text-gray-400 text-sm leading-relaxed">
              Penyedia material tambang berkualitas tinggi untuk mendukung
              proyek konstruksi di seluruh Indonesia.
            </p>

            <div className="flex gap-3">
              <a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <Mail size={18} />
              </a>
              <a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <Mail size={18} />
              </a>
              <a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#produk">Batu Split</a>
              <a href="#produk">Batu Screening</a>
              <a href="#produk">Batu Boulder</a>
              <a href="#produk">Pasir Batu</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#">Konsultasi Proyek</a>
              <a href="#">Manajemen Proyek</a>
              <a href="#">Pengadaan Material</a>
              <a href="#">Survey Lokasi</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+62 812-3456-7890</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@bklquarry.com</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Bandung, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BKL Quarry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
