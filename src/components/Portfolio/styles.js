import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 30px 150px 20px;
  position: relative;
  .swiper {
    position: relative;

    padding: 50px 15px;
    border: 1px dashed #999;
    border-radius: 15px;

    .swiper-button-prev,
    .swiper-button-next {
      color: #000;
    }
    .swiper-pagination {
      padding-bottom: 20px;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Quintessential", cursive;
  font-size: 30px;
  text-align: center;

  padding-bottom: 30px;
`;

export const SlideWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 0 30px;
  > div {
    width: 48%;
  }
`;

export const ImgWrap = styled.div`
  margin: 15px 0;
  img {
    border: 1px solid #000;
    border-radius: 15px;
  }
`;

export const DescWrap = styled.div`
  padding: 0 20px 10px;
  h3 {
    padding-bottom: 10px;

    text-align: center;
    font-size: 30px;
    font-family: "Quintessential", cursive;
  }
  > p {
    padding-bottom: 8px;

    font-weight: bold;
    font-size: 17px;
  }
`;
export const DescText = styled.div`
  padding-top: 5px;
  p {
    font-family: "Noto Sans KR", sans-serif;
    padding-top: 5px;
    &:nth-child(1) {
      text-indent: 10px;
    }
  }
`;

export const LinkBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  margin: 20px auto 10px;

  background-color: #fff;
  border: 1px solid #000;
  border-radius: 18px;
  cursor: pointer;

  &:hover {
    background-color: rgb(202, 202, 202);
    color: #fff;
  }
  span {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
  }
`;
