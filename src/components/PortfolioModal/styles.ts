import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(214, 229, 247, 0.7);
`;

export const ModalWrap = styled.div`
  position: relative;

  width: 80%;
  // height: 80%;
  padding: 90px 70px;

  border: 1px solid #d5d5d5;
  border-radius: 10px;
  background-color: #fff;
  overflow-y: auto;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 5%;
  right: 3%;

  font-size: 18px;
  padding: 5px;
  cursor: pointer;
`;
