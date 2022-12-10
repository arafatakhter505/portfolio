import React from "react";
import { webapp } from "../../assets";

const About = () => {
  return (
    <div
      id="about"
      className="container mx-auto px-6 md:flex justify-between items-center"
    >
      <div className="md:w-1/2">
        <img src={webapp} alt="" />
      </div>
      <div className="md:w-1/2">
        <h2 className="md:text-4xl text-3xl font-semibold">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="my-3">
          I am a web application developer, specializing in MERN Stack
          development. I have been developing web applications using JavaScript
          programming languages (React JS, Node JS, Express JS). I’m passionate
          about web application development and I’m looking forward to getting
          to work on new projects in the near future. <br /> <br />
          Something that I love about web application development is the
          opportunity to work with people from a wide range of disciplines. The
          web application development lifecycle involves working with so many
          different people and departments and, as a people person and someone
          who loves to build new relationships, it’s great to be able to come
          together with other professionals who are striving towards the same
          goal. I like to help my teammates in development work.
        </p>
        <a
          href="https://www.linkedin.com/in/arafat-akhter/"
          className="btn btn-primary text-white btn-sm normal-case mr-3"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/arafatakhter505"
          className="btn btn-primary text-white btn-sm normal-case"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default About;
