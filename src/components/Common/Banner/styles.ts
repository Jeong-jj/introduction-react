import styled from "styled-components";

const myPic = require("profile_imgs/profile_img.jpg");

export const MyProfile = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: space-evenly;
`;

export const PictureFrame = styled.div`
  position: relative;

  width: 500px;
  height: 500px;
  padding: 0 100px;
  border: 1px solid #000;
  border-radius: 50%;
  .myPic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 95%;
    height: 95%;
    border-radius: 50%;

    background-image: url(${myPic});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const AboutMe = styled.div`
  padding-right: 80px;
`;

export const DescTitle = styled.div`
  padding-top: 40px;

  font-family: "Rowdies", cursive;
  font-size: 55px;
  text-align: right;

  p:last-child {
    padding-top: 15px;

    font-size: 35px;
    font-family: "Quintessential", cursive;
  }
`;

export const DescContents = styled.div`
  padding-top: 32px;
  text-align: center;
`;

export const MyInfo = styled.div`
  p:nth-child(1) {
    font-weight: bold;
    font-size: 28px;

    padding-bottom: 15px;
  }
  p:nth-child(2) span {
    font-size: 16px;
    padding-left: 8px;
  }
`;

export const Articloid = styled.div`
  padding-top: 20px;
  p {
    font-family: "Noto Sans KR", sans-serif;
    padding-bottom: 5px;
  }
  p:nth-child(1) {
    padding-bottom: 15px;
    strong {
      font-size: 18px;
      padding: 0 8px;
    }
  }
`;
