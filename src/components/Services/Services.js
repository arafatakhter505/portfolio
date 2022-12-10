import React from "react";
import { backend, frontend, fullstack } from "../../assets";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="container mx-auto my-20 px-6">
      <h2 className="text-4xl font-semibold">
        My Awesome <span className="text-primary">Services</span>
      </h2>
      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        <ServiceCard
          title={"Frontend Development"}
          img={frontend}
          text={"HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React JS"}
        />
        <ServiceCard
          title={"Backend Development"}
          img={backend}
          text={"JavaScript, Node JS, Express JS, MongoDB"}
        />
        <ServiceCard
          title={"Full Stack Development"}
          img={fullstack}
          text={
            "HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React JS,Node JS, Express JS, MongoDB"
          }
        />
      </div>
    </div>
  );
};

export default Services;
