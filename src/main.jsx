import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div
      id="main"
      className="w-full h-full min-h-screen overflow-hidden mx-auto"
    >
      <Navbar />
      <div className="flex flex-col gap-[100px] pt-[80px]">
        <App />
        <Footer />
      </div>
    </div>
  </StrictMode>,
);
