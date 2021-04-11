import React from "react";

const Skillcard = ({ skill }) => {
  return (
    <div className="col-lg-6">
      <div className="skill-card">
        <img src={skill.icon} alt="icon" className="skill-card__icon" />
        <div className="skill-card-body">
          <h6 className="skill-card__title">{skill.title}</h6>
          <p className="skill-card__content">{skill.about}</p>
        </div>
      </div>
    </div>
  );
};

export default Skillcard;
