import React, { useState } from "react";
import skillList from "./skillList.json";
import "./Skills.css";

export const Skills = () => {
  const tabList = [
    { id: 0, category: skillList.html },
    { id: 1, category: skillList.css },
    { id: 2, category: skillList.js },
    { id: 3, category: skillList.jquery },
    { id: 4, category: skillList.react },
    { id: 5, category: skillList.git },
  ];

  const [active, setActive] = useState(0);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <section id="skill_section">
      <h1 className="skill-tit">Continuously Learning and Recording</h1>
      <div className="skill_block">
        <div className="skills">
          {tabList.map((data) => (
            <div
              key={data.id}
              className={data.category.name}
              onClick={() => handleClick(data.id)}
            >
              <img src={data.category.photo} alt={data.category.name} />
            </div>
          ))}
        </div>

        <div className="skill_desc">
          <h2>{tabList[active].category.name}</h2>

          <div className="descBlock">
            <p>{tabList[active].category.desc1}</p>
            <p>{tabList[active].category.desc2}</p>
            <p>{tabList[active].category.desc3}</p>
            <p>{tabList[active].category.desc4}</p>
            <p>{tabList[active].category.desc5}</p>
            <p>{tabList[active].category.desc6}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
