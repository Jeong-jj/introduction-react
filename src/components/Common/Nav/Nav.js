import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const Nav = () => {
  return (
    <S.TapsContainer>
      <S.TapBtn>
        <Link to={"/"}>History</Link>
      </S.TapBtn>
      <S.TapBtn>
        <Link to={"/skills"}>Skills</Link>
      </S.TapBtn>
      <S.TapBtn>
        <Link to={"/portfolio"}>Portfolio</Link>
      </S.TapBtn>
      <S.TapBtn>
        <Link to={"/practice"}>Practice</Link>
      </S.TapBtn>
    </S.TapsContainer>
  );
};
