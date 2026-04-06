export default function EcosystemSection() {
  return (
    <section
      id="strong-ecosystem"
      className="max-w-[1280px] w-full overflow-hidden mx-auto"
    >
      <div className="px-[75px] flex gap-[70px] justify-start items-center">
        <div className="w-[500px] h-[550px] shrink-0 overflow-hidden">
          <img
            src="/assets/images/thumbnails/thumbnail-2.png"
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[10px] w-[437px]">
            <h2 className="font-clash-display text-[46px] font-semibold">
              We Have VeryStrong Ecosystem
            </h2>
            <p className="font-medium leading-[32px] text-weserve-grey">
              We provide a variety of servers to grow your users acquisition
              much user-friendly and boosting up sales.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex gap-4 bg-white rounded-[16px] p-5 w-[500px]">
              <img
                src="/assets/images/icons/health.svg"
                className="w-[46px] h-[46px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <h3 className="font-bold text-[22px] leading-[24px]">
                  $880 Mio
                </h3>
                <p className="font-medium text-weserve-grey">
                  Company budget saved
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white rounded-[16px] p-5 w-[500px]">
              <img
                src="/assets/images/icons/cpu-charge.svg"
                className="w-[46px] h-[46px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <h3 className="font-bold text-[22px] leading-[24px]">
                  450,392
                </h3>
                <p className="font-medium text-weserve-grey">
                  All servers available
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white rounded-[16px] p-5 w-[500px]">
              <img
                src="/assets/images/icons/cloud-add.svg"
                className="w-[46px] h-[46px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <h3 className="font-bold text-[22px] leading-[24px]">
                  $189 Mio
                </h3>
                <p className="font-medium text-weserve-grey">
                  Websites are running good
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <a
              href="#"
              className="bg-weserve-purple rounded-full px-10 py-4 font-bold text-[18px] text-white"
            >
              Explore More
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
      </div>
    </section>
  );
}
