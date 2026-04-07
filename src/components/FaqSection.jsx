import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Apakah material yang disediakan sudah terjamin kualitasnya?",
      answer:
        "Ya, semua material kami telah melalui proses seleksi dan kontrol kualitas ketat untuk memastikan standar terbaik bagi proyek Anda.",
    },
    {
      question: "Apakah bisa melayani pengiriman ke luar kota?",
      answer:
        "Kami melayani pengiriman ke berbagai wilayah di Indonesia dengan sistem distribusi yang terjadwal dan efisien.",
    },
    {
      question: "Berapa kapasitas produksi harian?",
      answer:
        "Kami mampu memproduksi hingga 1.500 ton per hari, sehingga dapat memenuhi kebutuhan proyek skala kecil hingga besar.",
    },
    {
      question: "Apakah tersedia layanan konsultasi proyek?",
      answer:
        "Ya, kami menyediakan layanan konsultasi gratis untuk membantu Anda menentukan kebutuhan material dan strategi proyek.",
    },
    {
      question: "Bagaimana cara melakukan pemesanan?",
      answer:
        "Anda dapat menghubungi kami melalui WhatsApp atau form kontak yang tersedia di website ini.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-225 mx-auto px-5 md:px-10 py-10">
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pertanyaan Umum
          </h2>
          <p className="text-gray-500 mt-3">
            Temukan jawaban atas pertanyaan yang sering diajukan oleh klien
            kami.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="
                  border border-gray-200
                  rounded-xl overflow-hidden
                  transition-all duration-300
                  bg-white
                "
              >
                <button
                  onClick={() => toggle(index)}
                  className="
                    w-full flex justify-between items-center
                    px-5 py-4 text-left
                    hover:bg-gray-50
                    transition cursor-pointer
                  "
                >
                  <span className="font-semibold text-gray-900">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-green-700" : "text-gray-400"
                    }`}
                  />
                </button>

                <div
                  className={`
                    px-5 overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-50 pb-4" : "max-h-0"}
                  `}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
