import { useEffect } from "react";
import "./PreloadBackground.css";

export default function PreloadBackground() {
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector(".preloadWrapper")
        .classList.add("hiddenBackground");
      document.querySelector("#myLogo").classList.remove("preload");
    }, 3450);
  }, []);

  return (
    <div className="preloadWrapper flex justify-center items-center w-screen h-screen bg-[--navy] z-[999] relative">
      <img
        src="https://svgshare.com/i/12xT.svg"
        id="myLogo"
        className="preload"
        width={100}
        height={100}
        alt="my logo"
      />
    </div>
  );
}
