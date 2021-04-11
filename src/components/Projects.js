import React, { useState } from "react";
import data_projects from "./data/projects_data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState(data_projects);

  const handelFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
  };
  return (
    <div>
      <div className="container projects">
        <div className="projects__navbar">
          <div onClick={() => setProjects(data_projects)}>All</div>
          <div onClick={() => handelFilterCategory("react.js")}>React</div>
          <div onClick={() => handelFilterCategory("mongoDB")}>MongoDB</div>
          <div onClick={() => handelFilterCategory("node.js")}>Node</div>
          <div onClick={() => handelFilterCategory("vanilla")}>Vanilla JS</div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
