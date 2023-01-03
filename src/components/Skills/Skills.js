import React, { useState } from "react";
import data from "../../data/skills.json";
import "./Skills.css";

export const Skills = () => {
  const skills = data.skills;

  const [active, setActive] = useState(0);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <section id="skill_section">
      <h1 className="skill_tit">Continuously Learning and Recording</h1>
      <div className="skill_block">
        <div className="skills">
          {skills.map((data) => (
            <div
              key={data.id}
              className={data.name}
              onClick={() => handleClick(data.id)}
            >
              <img src={data.photo} alt={data.name} />
            </div>
          ))}
        </div>

        <div className="skill_desc">
          <h2>{skills[active].name}</h2>

          <div className="desc_block">
            {skills[active].desc.map((data) => (
              <p>{data}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
