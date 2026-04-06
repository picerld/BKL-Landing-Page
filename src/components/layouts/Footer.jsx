export default function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden mx-auto bg-[#070C29] -mt-[150px] pt-[150px]">
      <div className="flex flex-col gap-[50px] px-[75px] pb-[50px] pt-[200px] max-w-[1280px] mx-auto">
        <div className="flex gap-[100px] items-center">
          <div className="flex flex-col gap-[30px]">
            <div className="w-[175px] h-[42px] shrink-0 overflow-hidden">
              <img
                src="/assets/images/logos/logo-white.svg"
                className="w-full h-full object-cover"
                alt="logo"
              />
            </div>
            <p className="font-medium text-[#686c83] leading-[28px]">
              We host your empire business today using the latest technologies.
            </p>
            <div className="flex gap-[14px] items-center">
              <a href="#" className="bg-white rounded-full p-[10px]">
                <img
                  src="/assets/images/icons/sms.svg"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
              </a>
              <a href="#" className="bg-white rounded-full p-[10px]">
                <img
                  src="/assets/images/icons/global-purple.svg"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
              </a>
              <a href="#" className="bg-white rounded-full p-[10px]">
                <img
                  src="/assets/images/icons/call.svg"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
              </a>
              <a href="#" className="bg-white rounded-full p-[10px]">
                <img
                  src="/assets/images/icons/video-play.svg"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[70px] content-center justify-end">
            <div className="flex flex-col gap-[30px]">
              <h4 className="text-white font-bold text-[18px]">Products</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#686c83] font-medium">
                  Powerful Reports
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Blockchain
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Auto-Backup
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Data Science
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Auto-Scaling Up
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <h4 className="text-white font-bold text-[18px]">Resouces</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#686c83] font-medium">
                  Support 24/7
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Help Center
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  How-to Instructions
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Blog & Tips
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  About Us
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <h4 className="text-white font-bold text-[18px]">Company</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#686c83] font-medium">
                  Privacy & Policy
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Terms and Conditions
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Investor Relations
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Join With Us
                </a>
                <a href="#" className="text-[#686c83] font-medium">
                  Our Statistics
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-[#686c83] font-medium">
          All Rights Reserved • Copyright Weserve by BuildWithAngga 2024 in
          Bandung
        </p>
      </div>
    </footer>
  );
}
