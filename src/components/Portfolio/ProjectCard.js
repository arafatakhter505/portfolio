import React from "react";

const ProjectCard = ({ img, title, text, link }) => {
  return (
    <div className="card bg-base-100 shadow-xl border">
      <figure>
        <img src={img} alt="" className="w-full md:h-[180px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Technology: {text}</p>
        <div className="card-actions justify-end">
          <a
            href={link}
            className="btn btn-primary w-full mt-4 text-white normal-case"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
