import React from "react";

const SkillSlider = ({ name, value }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="">{name}</h3>
        <h3>{value}%</h3>
      </div>
      <progress
        className="progress progress-primary bg-gray-200"
        value={value}
        max="100"
      ></progress>
    </div>
  );
};

export default SkillSlider;
