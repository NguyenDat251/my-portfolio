import developerImg from "assets/developer.jpg";
import "./SkillSection.css";

const SkillTag = ({ skillName, x, y }) => {
  return (
    <div
      className="bg-green-500 p-4 absolute text-white skillTag cursor-pointer"
      style={{
        top: y,
        left: x,
      }}
    >
      {skillName}
    </div>
  );
};

export default function SkillSection() {
  return (
    <section className="flex justify-center items-center p-16 relative">
      <div>
        <img
          className="margin"
          alt="developers"
          src={developerImg}
          width={400}
          height={400}
        />
      </div>

      <SkillTag skillName={"HTML"} x={400} y={100} />
      <SkillTag skillName={"Javascript"} x={500} y={300} />
      <SkillTag skillName={"CSS"} x={300} y={200} />
      <SkillTag skillName={"ReactJs"} x={1000} y={200} />
      <SkillTag skillName={"TypeScript"} x={850} y={400} />
    </section>
  );
}
