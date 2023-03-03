import styled from "styled-components";

export const TapsContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 25px 0 20px;
  margin: 0 100px;
  border-top: 1px dashed #999;
`;
export const TapBtn = styled.li`
  font-size: 25px;
  font-family: "Rowdies", cursive;
  a {
    padding-bottom: 3px;
    &:hover {
      border-bottom: 2px solid #000;
    }
  }
`;
