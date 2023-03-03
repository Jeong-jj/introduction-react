import { createGlobalStyle } from "styled-components";

/*
  font-family: 'Comforter', cursive;
  font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Quintessential', cursive;
  font-family: 'Rowdies', cursive;
*/

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
}

button {
  background-color: #fff;
  border: none;
}
`;
