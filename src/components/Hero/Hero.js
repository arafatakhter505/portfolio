import React from "react";
import { heroImg } from "../../assets";

const Hero = () => {
  return (
    <div id="home" className="hero py-12 container mx-auto">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="md:w-1/2">
          <img src={heroImg} className="mx-auto w-2/3" alt="" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-semibold">
            Hey! I Am{" "}
            <span className="text-primary font-bold">Arafat Akhter</span>
          </h1>
          <p className="py-6">
            Web Application Developer with high level of experience in web
            designing and development, producting the Quality work
          </p>
          <a
            href="https://drive.google.com/file/d/1Tn3yMrwes8bbUrWTIpX-gkeIvj6UdeJC/view?usp=share_link"
            className="btn btn-primary text-white normal-case"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
