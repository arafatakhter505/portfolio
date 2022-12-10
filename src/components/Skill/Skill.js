import React from "react";
import SkillSlider from "./SkillSlider";

const Skill = () => {
  return (
    <div id="skill" className="container mx-auto my-20 px-6">
      <h2 className="md:text-4xl text-3xl font-semibold">
        My Professional <span className="text-primary">Skill</span>
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-12">
        <SkillSlider name={"HTML"} value={"90"} />
        <SkillSlider name={"CSS"} value={"80"} />
        <SkillSlider name={"Bootstrap"} value={"75"} />
        <SkillSlider name={"Tailwind CSS"} value={"75"} />
        <SkillSlider name={"JavaScript"} value={"70"} />
        <SkillSlider name={"React JS"} value={"65"} />
        <SkillSlider name={"Express JS"} value={"50"} />
        <SkillSlider name={"MongoDB (CRUD)"} value={"70"} />
      </div>
    </div>
  );
};

export default Skill;
