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
  <span className="w-full h-full absolute opacity-75 bg-black"></span>
);

const Skill = ({ skill }) => (
  <span className="rounded-full bg-green-500 p-2 text-white">{skill}</span>
);
export default function History() {
  const iconWrapperClasses =
    "rounded-lg border-solid border-white  border-4 bg-white hover:border-green-500 overflow-hidden";

  return (
    <div className="relative">
      <section className="secionHistory overflow-hidden" id="got-it">
        <BlackOverlay />
        <div>
          <div className="relative px-64 flex flex-col gap-4 text-white ">
            <div className="">
              <h2 className="text-5xl font-bold">Front-end developer</h2>
              <p className="text-xl">Got It Vietnam</p>
              <p>2022 - 2023</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <Skill skill="html" />
              <Skill skill="css" />
              <Skill skill="javascript" />
              <Skill skill="Reactjs" />
              <Skill skill="TypeScript" />
              <Skill skill="Jest" />
              <Skill skill="Cypress" />
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
      <section className="secionHistory overflow-hidden" id="shopee">
        <BlackOverlay />
        <div>
          <div className="relative px-64 flex flex-col gap-4 text-white ">
            <div className="">
              <h2 className="text-5xl font-bold">Front-end developer</h2>
              <p className="text-xl">Shopee Vietnam</p>
              <p>2022 - 2023</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <Skill skill="html" />
              <Skill skill="css" />
              <Skill skill="javascript" />
              <Skill skill="Reactjs" />
              <Skill skill="TypeScript" />
            </div>
          </div>

          <div className="flex absolute top-4 left-4">
            <p></p>
          </div>
        </div>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${ShopeeBackground})`,
          }}
        ></div>
      </section>
      <section className="secionHistory overflow-hidden" id="jh">
        <BlackOverlay />
        <div>
          <div className="relative px-64 flex flex-col gap-4 text-white ">
            <div className="">
              <h2 className="text-5xl font-bold">Front-end developer</h2>
              <p className="text-xl">Journey Horizon</p>
              <p>2022 - 2023</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <Skill skill="html" />
              <Skill skill="css" />
              <Skill skill="javascript" />
              <Skill skill="Reactjs" />
            </div>
          </div>

          <div className="flex absolute top-4 left-4">
            <p></p>
          </div>
        </div>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${JHBackground})`,
          }}
        ></div>
      </section>

      <div className="fixed top-[50vh] left-[20px] flex gap-2  flex-col">
        <a className={iconWrapperClasses} href="#got-it">
          <img alt="got-it-logo" src={GotitLogo} width={50} height={50} />
        </a>
        <a className={iconWrapperClasses} href="#shopee">
          <img alt="got-it-logo" src={ShopeeLogo} width={50} height={50} />
        </a>
        <a className={iconWrapperClasses} href="#jh">
          <img alt="got-it-logo" src={JHLogo} width={50} height={50} />
        </a>
      </div>
    </div>
  );
}
