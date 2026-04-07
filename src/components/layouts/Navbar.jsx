import { useState } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full backdrop-blur-md z-50 bg-white/80 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-18.75 py-5.5">
        <div className="w-55 shrink-0 overflow-hidden">
          <img
            src="https://bklquarry.com/wp-content/uploads/2024/03/header.png"
            className="w-full h-full object-contain"
            alt="logo"
          />
        </div>
        <ul className="flex items-center gap-[30px]">
          <li>
            <a href="#products" className="nav-link">
              Produk
            </a>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(!open)}
              className="cursor-pointer nav-link flex items-center gap-1"
            >
              Layanan
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`
                absolute top-full left-0 mt-3 w-[220px]
                bg-white rounded-xl shadow-lg border border-gray-100
                py-2
                transition-all duration-200
                ${
                  open
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-2 invisible"
                }
              `}
            >
              {[
                "Konsultasi",
                "Manajemen Proyek",
                "Pengadaan Material",
                "Survey Lokasi",
              ].map((item) => (
                <a
                  key={item}
                  href="#services"
                  className="
                    block px-4 py-2 text-sm text-gray-700
                    hover:bg-green-50 hover:text-green-700
                    transition-colors
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </li>
          <li>
            <a href="#testimoni" className="nav-link">
              Testimoni
            </a>
          </li>
          <li>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <Button as="a" href="#contact" variant="primary" icon={<MessageCircle size={18} />}>
            Hubungi Kami
          </Button>
        </div>
      </div>
    </nav>
  );
}
