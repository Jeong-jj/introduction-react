import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #fff;
  z-index: 999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`;

export const bigger = keyframes`
  0% {transform: scale(1.0);}
  50% {transform: scale(1.2);}
  100% {transform: scale(1.0);}
`;

export const Title = styled.h1`
  width: 30%;
  font-size: 40px;
  font-family: "Comforter", cursive;
  text-align: center;
  a {
    cursor: default;
  }

  &:hover {
    animation: ${bigger};
    animation-duration: 1s;
  }
`;

export const ContactBox = styled.div`
  width: 30%;
  padding-left: 50px;

  display: flex;
  align-items: center;
`;

export const BtnWrap = styled.div`
  display: inline-block; /* 자식너비에 부모 맞추기용 */
  margin-left: 15px;
  color: rgb(106, 106, 106);
  cursor: pointer;

  .sendMail {
    font-size: 35px;
    margin-right: 10px;
  }
  a {
    font-size: 20px;
    font-weight: bold;
  }

  &:hover {
    color: #000;
    border-bottom: 1px solid #000;
  }
`;

export const SnsWrap = styled.ul`
  display: flex;
  justify-content: flex-end;

  padding-right: 50px;
  width: 30%;
  color: rgb(106, 106, 106);

  li {
    padding: 5px;
    font-size: 35px;
    font-weight: bold;
    .snsIcon {
      padding-bottom: 5px;
      &:hover {
        color: #000;
        border-bottom: 1px solid #000;
        cursor: pointer;
      }
    }
    & + li {
      margin-left: 20px;
    }
  }
`;
