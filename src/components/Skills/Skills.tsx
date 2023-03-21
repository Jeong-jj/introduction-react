import React, { useState } from "react";
import data from "../../data/skills.json";
import * as S from "./styles";

export const Skills = () => {
  const skills = data.skills;

  const [active, setActive] = useState(4);

  const handleClick = (id: number) => {
    setActive(id);
  };

  return (
    <S.SectionContainer>
      <S.Title>Continuously Learning and Recording</S.Title>

      <S.ContentsWrap>
        <S.IconsContainer>
          <h2>Main Stack</h2>
          <S.IconsWrap>
            {skills.main.map((data) => (
              <S.Icon
                key={data.id}
                className={data.name}
                onClick={() => handleClick(data.id)}
              >
                <img src={data.photo} alt={data.name} />
              </S.Icon>
            ))}
          </S.IconsWrap>

          <h2>Now Interest In</h2>
          <S.IconsWrap>
            {skills.interest.map((data) => (
              <S.Icon
                key={data.id}
                className={data.name}
                onClick={() => {
                  window.open(data.url);
                }}
              >
                <img src={data.photo} alt={data.name} />
              </S.Icon>
            ))}
          </S.IconsWrap>
        </S.IconsContainer>

        <S.DescWrap>
          <h2>{skills.main[active].name}</h2>

          <S.DescText>
            {skills.main[active].desc.map((data: string) => (
              <p>· {data}</p>
            ))}
          </S.DescText>
        </S.DescWrap>
      </S.ContentsWrap>
    </S.SectionContainer>
  );
};
