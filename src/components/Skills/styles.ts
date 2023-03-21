import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 30px 150px 20px;
`;

export const Title = styled.h1`
  font-family: "Quintessential", cursive;
  font-size: 30px;
  text-align: center;

  padding-bottom: 30px;
`;

export const ContentsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 48%;
  }
`;

export const IconsContainer = styled.div`
  h2 {
    padding-top: 20px;
    font-size: 25px;
  }
`;

export const IconsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  flex: 0 1 23%;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    border: 2px dotted rgb(155, 155, 155);
    border-radius: 15px;
  }
`;

export const DescWrap = styled.div`
  padding: 20px 0;
  h2 {
    padding-bottom: 20px;
    font-size: 30px;
    font-family: "Rowdies", cursive;
  }
`;

export const DescText = styled.div`
  font-size: 20px;
  font-family: "Noto Sans KR", sans-serif;
  p {
    padding-bottom: 10px;
  }
`;
