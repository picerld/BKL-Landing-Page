export default function Navbar() {
  return (
    <nav id="navbar" className="fixed top-0 w-full backdrop-blur-md z-50">
      <div className="max-w-[1280px] mx-auto w-full flex justify-between items-center px-[75px] py-[30px]">
        <div className="w-[175px] shrink-0 overflow-hidden">
          <img
            src="/assets/images/logos/logo-black.svg"
            className="w-full h-full object-cover"
            alt="logo"
          />
        </div>
        <ul className="flex items-center gap-[30px]">
          <li>
            <a href="#" className="font-medium">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="font-medium flex gap-1">
              Services
              <img
                src="/assets/images/icons/arrow-down.svg"
                width="18"
                height="18"
                alt="icon"
              />
            </a>
          </li>
          <li>
            <a href="#" className="font-medium">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="font-medium">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="font-medium">
              Blog
            </a>
          </li>
        </ul>
        <div className="flex gap-[10px] items-center">
          <a href="#">
            <div className="w-[44px] shrink-0">
              <img src="/assets/images/icons/cart-bg-white.svg" alt="icon" />
            </div>
          </a>
          <a
            href="#"
            className="bg-[#080c2e] rounded-full px-[30px] py-[10px] text-white font-semibold"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
