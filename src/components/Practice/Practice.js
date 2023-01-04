import React from "react";
import GitHubCalendar from "react-github-calendar";
import * as S from "./styles";

export const Practice = () => {
  return (
    <S.PracticeSection>
      <h1 className="practice-tit">More harder, More greener</h1>

      <GitHubCalendar username="jeong-jj" blockSize={16} />
    </S.PracticeSection>
  );
};
