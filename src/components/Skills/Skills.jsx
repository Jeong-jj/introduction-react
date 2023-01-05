import React, { useState } from "react";
import data from "../../data/skills.json";
import * as S from "./styles";

export const Skills = () => {
  const skills = data.skills;

  const [active, setActive] = useState(0);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <S.SectionContainer>
      <S.Title className="skill_tit">
        Continuously Learning and Recording
      </S.Title>
      <S.ContentsWrap>
        <S.IconsContainer>
          {skills.map((data) => (
            <S.IconWrap
              key={data.id}
              className={data.name}
              onClick={() => handleClick(data.id)}
            >
              <img src={data.photo} alt={data.name} />
            </S.IconWrap>
          ))}
        </S.IconsContainer>

        <S.DescWrap>
          <h2>{skills[active].name}</h2>

          <S.DescText>
            {skills[active].desc.map((data) => (
              <p>{data}</p>
            ))}
          </S.DescText>
        </S.DescWrap>
      </S.ContentsWrap>
    </S.SectionContainer>
  );
};
