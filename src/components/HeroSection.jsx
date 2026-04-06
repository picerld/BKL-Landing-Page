export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="max-w-[1280px] w-full overflow-hidden mx-auto"
    >
      <div className="px-[75px] pt-[80px] flex justify-between items-center">
        <div className="flex flex-col gap-[40px]">
          <div className="!w-fit bg-white rounded-full px-4 py-2">
            <div className="flex gap-[6px] items-center">
              <img
                src="/assets/images/icons/global.svg"
                className="w-6 h-6"
                alt="icons"
              />
              <p className="font-semibold">
                We host more than 120,000 websites
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-clash-display text-[70px] leading-[100%] font-semibold min-h-[140px]">
              Grow Online Business Faster.
            </h1>
            <p className="font-medium text-weserve-grey">
              We provide a variety of servers to grow your users acquisition
              much user-friendly and boosting up sales.{" "}
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <a
              href="#"
              className="bg-[#640ef1] rounded-full px-10 py-4 font-bold text-[18px] text-white"
            >
              Try Free Trial
            </a>
            <a href="#">
              <div className="flex gap-[6px] items-center">
                <img
                  src="/assets/images/icons/device-message-purple.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <p className="font-semibold text-weserve-purple">
                  Schedule a Demo
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-[500px] h-[550px] shrink-0 overflow-hidden">
          <img
            src="/assets/images/thumbnails/thumbnail-1.png"
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
      </div>
    </section>
  );
}
