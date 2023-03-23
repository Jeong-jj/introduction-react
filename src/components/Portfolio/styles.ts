import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 30px 140px 20px;
`;

export const Title = styled.h1`
  font-family: "Quintessential", cursive;
  font-size: 30px;
  text-align: center;

  padding-bottom: 50px;
`;

export const ProductList = styled.div`
  display: flex;
`;

export const ProductWrap = styled.div`
  position: relative;
  flex: 0 1 32%;

  cursor: pointer;
  transition: 0.5s all;

  > * {
    border: 2px solid #5d5d5d;
    border-radius: 10px;
  }
  img {
    width: 100%;
    height: 240px;
  }

  & + & {
    margin-left: 2%;
  }
  &:hover {
    transform: scale(1.1);
    > div {
      opacity: 0.8;
    }
  }
`;

export const BackgroundName = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d6e5f7;
  opacity: 0;

  font-size: 18px;
  font-weight: bold;
`;
