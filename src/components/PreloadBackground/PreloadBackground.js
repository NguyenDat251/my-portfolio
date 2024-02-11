import { useEffect } from "react";
import "./PreloadBackground.css";
import DLogo from "assets/logo/DLogo.svg";

export default function PreloadBackground() {
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector(".preloadWrapper")
        .classList.add("hiddenBackground");
    }, 3450);
  }, []);

  return (
    <div className="preloadWrapper flex justify-center items-center w-screen h-screen bg-[--navy] z-[999] relative">
      <img
        src={DLogo}
        className="preload"
        width={100}
        height={100}
        alt="my logo"
      />
    </div>
  );
}
