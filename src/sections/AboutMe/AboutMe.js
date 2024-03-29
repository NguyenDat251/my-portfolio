import MyImg from "assets/my-img.webp";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <h2 className="titleSection">About me</h2>
      <div className="flex flex-col gap-6 lg:gap-12 lg:flex-row">
        <div className="flex flex-col gap-2 md:gap-2.5">
          <p>
            Hello! My name is Dat. I was born in 1998 in Nha Trang City, a
            stunning beach. I studied and graduated with a software engineering
            major in Ho Chi Minh City University of Science in 2020.
          </p>
          <p>
            I have three years of experience in front-end development. I am
            confident that I have deep knowledge of necessary languages and
            technologies for Front-end.
          </p>
          <p>
            I&apos;m willing to learn new things, and not afraid of complex
            tasks. I always try to read and stay up to date with the latest
            technology news.
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute border-4 rounded-sm border-[--green] h-40 bottom-0 md:h-[600px] lg:h-[300px] lg:min-w-[210px]"
            style={{
              minWidth: "calc(100% - 20px)",
            }}
          ></div>
          <div className="d-1">
            <div
              className="relative bg-center bg-cover rounded-sm h-40 md:h-[600px] lg:h-[300px] min-w-[210px] cursor-pointer"
              style={{
                backgroundImage: `url(${MyImg})`,
              }}
            ></div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
