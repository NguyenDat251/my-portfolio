import developerImg from "assets/developer.jpg";
import classNames from "classnames";
import "./SkillSection.css";

const SkillTag = ({ skillName, classes }) => {
  return (
    <div
      className={classNames(
        "bg-green-500 p-4 absolute text-white skillTag cursor-pointer",
        classes
      )}
      a
    >
      {skillName}
    </div>
  );
};

export default function SkillSection() {
  return (
    <section className="flex justify-center items-center p-16 relative h-screen">
      <div>
        <h2>My Skills</h2>
        <img
          className="margin w-screen lg:w-[400px] lg:h-[400px]"
          alt="developers"
          src={developerImg}
        />
      </div>

      <SkillTag
        skillName={"HTML"}
        classes="top-[100px] left-[50px] lg:top-[400px] lg:left-[100px]"
      />
      <SkillTag
        skillName={"Javascript"}
        classes="top-[200px] left-[250px] lg:top-[500px] lg:left-[300px]"
      />
      <SkillTag
        skillName={"CSS"}
        classes="top-[80px] left-[250px] lg:top-[300px] lg:left-[200px]"
      />
      <SkillTag
        skillName={"ReactJs"}
        classes="top-[250px] left-[50px] lg:top-[1000px] lg:left-[200px]"
      />
      <SkillTag
        skillName={"TypeScript"}
        classes="top-[300px] left-[200px] lg:top-[850px] lg:left-[400px]"
      />

      <SkillTag
        skillName={"Jest"}
        classes="top-[300px] left-[200px] lg:top-[850px] lg:left-[400px]"
      />

      <SkillTag
        skillName={"Cypress"}
        classes="top-[300px] left-[200px] lg:top-[850px] lg:left-[400px]"
      />
    </section>
  );
}
