export default function ChoiceSection() {
  return (
    <section
      id="best-choices"
      className="max-w-[1280px] w-full overflow-hidden mx-auto"
    >
      <div className="flex flex-col gap-[30px] px-[75px]">
        <h2 className="font-clash-display font-semibold text-[46px] text-center">
          Your Best Choice
        </h2>
        <div className="grid grid-cols-4 gap-[30px]">
          <div className="relative flex flex-col gap-[30px] px-5 py-[30px] bg-white hover:bg-[#080c2e] rounded-[16px] group transition-all duration-300">
            <div className="hidden absolute right-1 -translate-y-4 group-hover:block opacity-80">
              <img src="/assets/images/icons/ellipse.svg" alt="shadow" />
            </div>
            <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
              <img src="/assets/images/icons/hierarchy-square.svg" alt="icon" />
            </div>
            <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
              <img
                src="/assets/images/icons/hierarchy-square-white.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1 z-10">
              <h3 className="font-bold text-[22px] group-hover:text-white transition-all duration-300">
                Extra Layers
              </h3>
              <p className="font-medium leading-[28px] text-weserve-grey group-hover:text-[#686c83]">
                Making your project more secure avoiding DDoS
              </p>
            </div>
            <div>
              <a
                href="#"
                className="font-semibold text-weserve-purple group-hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative flex flex-col gap-[30px] px-5 py-[30px] bg-white hover:bg-[#080c2e] rounded-[16px] group transition-all duration-300">
            <div className="hidden absolute right-1 -translate-y-4 group-hover:block opacity-80">
              <img src="/assets/images/icons/ellipse.svg" alt="shadow" />
            </div>
            <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
              <img src="/assets/images/icons/3dcube.svg" alt="icon" />
            </div>
            <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
              <img src="/assets/images/icons/3dcube-white.svg" alt="icon" />
            </div>
            <div className="flex flex-col gap-1 z-10">
              <h3 className="font-bold text-[22px] group-hover:text-white transition-all duration-300">
                Customizable
              </h3>
              <p className="font-medium leading-[28px] text-weserve-grey group-hover:text-[#686c83]">
                Only install what your business needs to grow
              </p>
            </div>
            <div>
              <a
                href="#"
                className="font-semibold text-weserve-purple group-hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative flex flex-col gap-[30px] px-5 py-[30px] bg-white hover:bg-[#080c2e] rounded-[16px] group transition-all duration-300">
            <div className="hidden absolute right-1 -translate-y-4 group-hover:block opacity-80">
              <img src="/assets/images/icons/ellipse.svg" alt="shadow" />
            </div>
            <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
              <img src="/assets/images/icons/status-up-purple.svg" alt="icon" />
            </div>
            <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
              <img src="/assets/images/icons/status-up.svg" alt="icon" />
            </div>
            <div className="flex flex-col gap-1 z-10">
              <h3 className="font-bold text-[22px] group-hover:text-white transition-all duration-300">
                AI Automation
              </h3>
              <p className="font-medium leading-[28px] text-weserve-grey group-hover:text-[#686c83]">
                Decide the business flow based on latest reports
              </p>
            </div>
            <div>
              <a
                href="#"
                className="font-semibold text-weserve-purple group-hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative flex flex-col gap-[30px] px-5 py-[30px] bg-white hover:bg-[#080c2e] rounded-[16px] group transition-all duration-300">
            <div className="hidden absolute right-1 -translate-y-4 group-hover:block opacity-80">
              <img src="/assets/images/icons/ellipse.svg" alt="shadow" />
            </div>
            <div className="block w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:hidden transition-all duration-300">
              <img src="/assets/images/icons/driver-refresh.svg" alt="icon" />
            </div>
            <div className="hidden w-[46px] h-[46px] shrink-0 overflow-hidden group-hover:block transition-all duration-300">
              <img
                src="/assets/images/icons/driver-refresh-white.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1 z-10">
              <h3 className="font-bold text-[22px] group-hover:text-white transition-all duration-300">
                Auto-Scalling
              </h3>
              <p className="font-medium leading-[28px] text-weserve-grey group-hover:text-[#686c83]">
                Have a long weekend without worrying any loss
              </p>
            </div>
            <div>
              <a
                href="#"
                className="font-semibold text-weserve-purple group-hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
