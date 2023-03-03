import styled from "styled-components";

export const CareerSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px 0 20px;
`;

export const HistoryContainer = styled.div`
  width: 30%;
  padding-right: 20px;
`;

export const ListWrap = styled.ul`
  span {
    font-weight: bold;
  }
  > li {
    font-size: 32px;
    font-weight: bold;
    font-family: "Quintessential", cursive;

    margin-bottom: 25px;
  }
`;

export const ListPart = styled.ul`
  font-size: 18px;
  font-family: "Noto Sans KR", sans-serif;

  li {
    margin-left: 15px;
    padding-top: 8px;

    p + p {
      padding: 5px 0 0 10px;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .linkBtn {
    color: #008cff;
    cursor: pointer;
  }
`;

export const IntroArticle = styled.div`
  width: 45%;

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
