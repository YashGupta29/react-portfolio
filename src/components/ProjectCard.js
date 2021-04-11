import React from "react";
import github from "../assets/icons/github.svg";

const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    // <div className="container">
    //   <div className="row">
    <div className="projectCard col-md-6 col-lg-4 ">
      <figure className="projectCard__wrapper">
        <a href={deployed_url}>
          <img src={image} alt={name} className="projectCard__image" />
        </a>
        <div className="projectCard__title">
          <a href={github_url} target="_blank">
            <img src={github} alt="Github Link" className="projectCard__icon" />
          </a>
          {name}
        </div>
      </figure>
    </div>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
