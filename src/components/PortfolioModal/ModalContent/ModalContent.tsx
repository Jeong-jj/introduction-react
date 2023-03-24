import React from "react";
import { product } from "types/type";

import * as S from "./styles";

interface Props {
  data: product;
}
const ModalContent = (props: Props) => {
  const { data } = props;

  return (
    <S.ContentContainer>
      <img src={data.img} alt={data.title} />

      <S.ProductInfo>
        <h3>{data.title}</h3>
        <S.StackNames>
          🧰:
          {data.language.map((data, index) => (
            <span key={index}>{data}</span>
          ))}
        </S.StackNames>

        <S.InfoLinkContainer>
          <S.InfoLink onClick={() => window.open(data.github)}>
            <img
              src="https://img.shields.io/badge/Github-white?style=flat-square&logo=Github&logoColor=white&color=181717"
              alt="Github Link"
            />
          </S.InfoLink>
          {data.notion && (
            <S.InfoLink onClick={() => window.open(data.notion)}>
              <img
                src="https://img.shields.io/badge/Notion-black?style=flat-square&logo=Notion&logoColor=black&color=F4A0B0"
                alt="Github Link"
              />
            </S.InfoLink>
          )}
        </S.InfoLinkContainer>

        <S.SummaryText>
          📋Summary
          {data.desc.map((data, index) => (
            <p key={index}>· {data}</p>
          ))}
        </S.SummaryText>

        <S.ProductLink onClick={() => window.open(data.url)}>
          보러가기
        </S.ProductLink>
      </S.ProductInfo>
    </S.ContentContainer>
  );
};

export default ModalContent;
