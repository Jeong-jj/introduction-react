import React from "react";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Rights>
        <span>copyright &copy; JeongJun All Rights Reserved.</span>
      </S.Rights>

      <S.AppTool>
        <span>This website created using create-react-app</span>
      </S.AppTool>
    </S.FooterContainer>
  );
};
