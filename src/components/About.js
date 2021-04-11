import React from "react";
import api from "../assets/icons/api.svg";
import Skillcard from "./Skillcard";

const skills = [
  {
    icon: api,
    title: "lorem4 dadad wada dwads awdw",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: api,
    title: "lorem4 dadad wada dwads awdw",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: api,
    title: "lorem4 dadad wada dwads awdw",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: api,
    title: "lorem4 dadad wada dwads awdw",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: api,
    title: "lorem4 dadad wada dwads awdw",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: api,
    title: "lorem4 dadad wada dwads awdw",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const About = () => {
  return (
    <div className="about">
      <h6 className="about__intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque
        beatae unde architecto odio vel!
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What i Offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
