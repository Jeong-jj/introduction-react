import styled from "styled-components";

export const CareerSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px 150px 20px;
`;

export const HistoryContainer = styled.div`
  width: 45%;
`;

export const ListWrap = styled.ul`
  span {
    font-weight: bold;
  }
  > li {
    font-size: 32px;
    font-weight: bold;
    font-family: "Quintessential", cursive;

    margin-bottom: 30px;
  }
`;

export const ListPart = styled.ul`
  font-size: 18px;
  font-family: "Noto Sans KR", sans-serif;

  li {
    margin-left: 20px;
    padding: 8px 0;

    p:nth-child(2) {
      padding-top: 5px;
      font-weight: 400;
    }
  }
`;

export const IntroArticle = styled.div`
  width: 55%;

  h2 {
    font-size: 32px;
    font-weight: bold;
    font-family: "Quintessential", cursive;
  }
`;

export const ArticleTitle = styled.div`
  text-align: center;

  .quoteIcon {
    font-size: 22px;
  }
  h3 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 22px;

    display: inline-block;
    padding: 10px 10px 6px;
  }
`;

export const ArticleContents = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;

  p {
    text-indent: 10px;
    padding: 10px 5px 5px;
  }
`;
