import React from "react";
import { bikeghor, techteaching, toothfixers } from "../../assets";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <div id="portfolio" className="container mx-auto my-20 px-6">
      <h2 className="md:text-4xl text-3xl font-semibold">
        My Recent <span className="text-primary">Projects</span>
      </h2>
      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        <ProjectCard
          title={"BikeGhor"}
          img={bikeghor}
          text={
            "React JS, Tailwind CSS, Daisy UI, Firebase, Node JS, Express JS, MongoDB"
          }
          link={"https://bikeghor-4fa21.web.app/"}
        />
        <ProjectCard
          title={"Tooth Fixers"}
          img={toothfixers}
          text={
            "React JS, Tailwind CSS, Daisy UI, Firebase, Node JS, Express JS, MongoDB"
          }
          link={"https://toothfixers-8cb17.web.app/"}
        />
        <ProjectCard
          title={"Tech Teaching Club"}
          img={techteaching}
          text={
            "React JS, Tailwind CSS, Daisy UI, Firebase, Node JS, Express JS, MongoDB"
          }
          link={"https://techteachingclub.web.app/"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
