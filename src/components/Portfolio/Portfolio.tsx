import React from "react";

import data from "data/portfolio.json";

import * as S from "./styles";

export const Portfolio = () => {
  const products = data.portfolio;

  return (
    <S.SectionContainer>
      <S.Title>This is what I made</S.Title>

      <S.ProductList>
        {products.map((data, index) => (
          <S.ProductWrap key={index}>
            <img src={data.img} alt={data.title} />
            <S.BackgroundName>{data.title}</S.BackgroundName>
          </S.ProductWrap>
        ))}
      </S.ProductList>
    </S.SectionContainer>
  );
};
