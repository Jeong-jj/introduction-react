import React, { useState } from "react";

import { product } from "types/type";
import data from "data/portfolio.json";

import PortfolioModal from "components/PortfolioModal/PortfolioModal";

import * as S from "./styles";

export const Portfolio = () => {
  const products = data.portfolio;

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<product>(null);

  const modalOpen = (data: product) => {
    setModalData(data);
    setModalOpen((prev) => !prev);
  };
  const modalClose = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <S.SectionContainer>
      <S.Title>This is what I made</S.Title>

      <S.ProductList>
        {products.map((data, index) => (
          <S.ProductWrap key={index} onClick={() => modalOpen(data)}>
            <img src={data.img} alt={data.title} />
            <S.BackgroundName>{data.title}</S.BackgroundName>
          </S.ProductWrap>
        ))}
      </S.ProductList>

      {isModalOpen && (
        <PortfolioModal data={modalData} toggleClose={modalClose} />
      )}
    </S.SectionContainer>
  );
};
