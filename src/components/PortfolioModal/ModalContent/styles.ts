import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    width: 50%;

    border: 1px solid #d5d5d5;
    border-radius: 10px;
  }
`;

export const ProductInfo = styled.div`
  width: 47%;

  h3 {
    text-align: center;
    font-weight: bold;
    padding-bottom: 25px;
  }
`;

export const StackNames = styled.div`
  span {
    padding: 2px 3px;

    font-size: 14px;
    font-weight: bold;

    border: 1px solid #d5d5d5;
    border-radius: 3px;

    margin-left: 5px;
  }
`;

export const InfoLinkContainer = styled.div`
  margin: 12px 0 6px;
`;

export const InfoLink = styled.div`
  display: inline-block;
  cursor: pointer;

  & + & {
    margin-left: 5px;
  }
  img {
    width: 75px;
    height: 100%;
    border-radius: 4px;
  }
`;

export const SummaryText = styled.div`
  p {
    padding-top: 9px;
    font-size: 14px;

    &:first-child {
      padding-top: 13px;
    }
  }
`;

export const ProductLink = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 8px 12px;

  border: 1px solid #d5d5d5;
  cursor: pointer;
`;
