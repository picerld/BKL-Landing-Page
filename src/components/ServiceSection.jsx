export default function ServiceSection() {
  return (
    <section
      id="services-provide"
      className="relative z-20 max-w-[1280px] w-full overflow-hidden mx-auto px-[75px] -mb-[250px]"
    >
      <div className="bg-[#640ef1] rounded-[40px]">
        <div className="flex gap-[60px] items-center p-[50px]">
          <div className="flex flex-col gap-[40px] w-[478px]">
            <div className="!w-fit bg-white rounded-full px-4 py-2">
              <div className="flex gap-[6px] items-center">
                <img
                  src="/assets/images/icons/global.svg"
                  className="w-6 h-6"
                  alt="icons"
                />
                <p className="font-semibold">We host more than 120,000 websites</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] text-white">
              <h2 className="font-clash-display font-semibold text-[46px]">
                Start Growing Today
              </h2>
              <p className="leading-[32px]">
                We provide a variety of servers to grow your users acquisition
                much user-friendly and hosting up sales.
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <a
                href="#"
                className="bg-[#ffd15a] rounded-full px-10 py-4 font-bold text-[18px]"
              >
                Explore More
              </a>
              <a href="#">
                <div className="flex gap-[6px] items-center">
                  <img
                    src="/assets/images/icons/device-message-white.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                  <p className="font-semibold text-white">Schedule a Demo</p>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center gap-5">
            <a href="#">
              <div className="relative flex flex-col gap-5 py-[40px] px-4 rounded-[26px] bg-white items-center hover:bg-[#080c2e] group transition-all duration-300">
                <div className="hidden absolute right-2 top-2 opacity-70 group-hover:block transition-all duration-300">
                  <img
                    src="/assets/images/icons/ellipse_mini.svg"
                    alt="shadow"
                  />
                </div>
                <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
                  <img src="/assets/images/icons/scroll.svg" alt="icon" />
                </div>
                <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
                  <img src="/assets/images/icons/scroll-white.svg" alt="icon" />
                </div>
                <h3 className="font-bold text-[18px] group-hover:text-white transition-all duration-300">
                  Web Crawl
                </h3>
              </div>
            </a>
            <a href="#">
              <div className="relative flex flex-col gap-5 py-[40px] px-4 rounded-[26px] bg-white items-center hover:bg-[#080c2e] group transition-all duration-300">
                <div className="hidden absolute right-2 top-2 opacity-70 group-hover:block transition-all duration-300">
                  <img
                    src="/assets/images/icons/ellipse_mini.svg"
                    alt="shadow"
                  />
                </div>
                <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
                  <img src="/assets/images/icons/cpu-charge.svg" alt="icon" />
                </div>
                <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
                  <img
                    src="/assets/images/icons/cpu-charge-white.svg"
                    alt="icon"
                  />
                </div>
                <h3 className="font-bold text-[18px] group-hover:text-white transition-all duration-300">
                  Fast Report
                </h3>
              </div>
            </a>
            <a href="#">
              <div className="relative flex flex-col gap-5 py-[40px] px-4 rounded-[26px] bg-white items-center hover:bg-[#080c2e] group transition-all duration-300">
                <div className="hidden absolute right-2 top-2 opacity-70 group-hover:block transition-all duration-300">
                  <img
                    src="/assets/images/icons/ellipse_mini.svg"
                    alt="shadow"
                  />
                </div>
                <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
                  <img
                    src="/assets/images/icons/security-user-purple.svg"
                    alt="icon"
                  />
                </div>
                <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
                  <img
                    src="/assets/images/icons/security-user.svg"
                    alt="icon"
                  />
                </div>
                <h3 className="font-bold text-[18px] group-hover:text-white transition-all duration-300">
                  Anti-DDoS
                </h3>
              </div>
            </a>
            <a href="#">
              <div className="relative flex flex-col gap-5 py-[40px] px-4 rounded-[26px] bg-white items-center hover:bg-[#080c2e] group transition-all duration-300">
                <div className="hidden absolute right-2 top-2 opacity-70 group-hover:block transition-all duration-300">
                  <img
                    src="/assets/images/icons/ellipse_mini.svg"
                    alt="shadow"
                  />
                </div>
                <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
                  <img
                    src="/assets/images/icons/status-up-purple.svg"
                    alt="icon"
                  />
                </div>
                <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
                  <img src="/assets/images/icons/status-up.svg" alt="icon" />
                </div>
                <h3 className="font-bold text-[18px] group-hover:text-white transition-all duration-300">
                  Auto-Scale
                </h3>
              </div>
            </a>
            <a href="#">
              <div className="relative flex flex-col gap-5 py-[40px] px-4 rounded-[26px] bg-white items-center hover:bg-[#080c2e] group transition-all duration-300">
                <div className="hidden absolute right-2 top-2 opacity-70 group-hover:block transition-all duration-300">
                  <img
                    src="/assets/images/icons/ellipse_mini.svg"
                    alt="shadow"
                  />
                </div>
                <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
                  <img src="/assets/images/icons/candle.svg" alt="icon" />
                </div>
                <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
                  <img src="/assets/images/icons/candle-white.svg" alt="icon" />
                </div>
                <h3 className="font-bold text-[18px] group-hover:text-white transition-all duration-300">
                  AI Perform
                </h3>
              </div>
            </a>
            <a href="#">
              <div className="relative flex flex-col gap-5 py-[40px] px-4 rounded-[26px] bg-white items-center hover:bg-[#080c2e] group transition-all duration-300">
                <div className="hidden absolute right-2 top-2 opacity-70 group-hover:block transition-all duration-300">
                  <img
                    src="/assets/images/icons/ellipse_mini.svg"
                    alt="shadow"
                  />
                </div>
                <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
                  <img src="/assets/images/icons/crown.svg" alt="icon" />
                </div>
                <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
                  <img src="/assets/images/icons/crown-white.svg" alt="icon" />
                </div>
                <h3 className="font-bold text-[18px] group-hover:text-white transition-all duration-300">
                  Top Plugins+
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
