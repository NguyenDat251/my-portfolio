import { gsap } from "gsap";
import { useEffect } from "react";
import "./History.css";
import JHBackground from "assets/Journey-horizon.jpeg";
import ShopeeBackground from "assets/shopee.jpeg";
import GotItBackground from "assets/got-it.jpeg";
import GotitLogo from "assets/logo/gotit.png";
import ShopeeLogo from "assets/logo/shopee.png";
import JHLogo from "assets/logo/jh.png";

const BlackOverlay = () => (
  <span className="w-full h-full absolute opacity-50 bg-black"></span>
);

export default function History() {
  return (
    <>
      <section className="secionHistory overflow-hidden">
        <BlackOverlay />
        <div>
          <div className="flex absolute top-4 left-4">
            <div>
              <img alt="got-it-logo" src={GotitLogo} width={50} height={50} />
            </div>
            <div className="text-white ">
              <p>Front-end developer</p>
              <p>Got It Vietnam</p>
              <p>2022 - 2023</p>
            </div>
          </div>

          <div className="flex absolute top-4 left-4">
            <p></p>
          </div>
        </div>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${GotItBackground})`,
          }}
        ></div>
      </section>
      <section className="secionHistory">
        <BlackOverlay />
        <h1>Is</h1>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${ShopeeBackground})`,
          }}
        ></div>
      </section>
      <section className="secionHistory">
        <BlackOverlay />
        <h1>A</h1>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${JHBackground})`,
          }}
        ></div>
        <div></div>
      </section>
    </>
  );
}
