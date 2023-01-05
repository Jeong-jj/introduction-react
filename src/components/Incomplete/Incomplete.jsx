import React from "react";
import styled from "styled-components";

export const Incomplete = () => {
  return (
    <PageContainer>
      <DescText>
        <div>
          <p>본 사이트는 PC 또는</p>
          <p>태블릿 가로 화면에 최적화 되어 있습니다.</p>
        </div>

        <div>
          <p>🚧🚧🚧</p>
          <p>반응형 사이트 준비중이므로</p>
          <p>PC 혹은 태블릿으로 접속하는 것을 권장합니다.</p>
        </div>
      </DescText>
    </PageContainer>
  );
};

const screen = window.innerWidth * 0.85;

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #f2f2f2;
`;

const DescText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${screen}px;

  font-size: 20px;
  text-align: center;

  p + p {
    padding-top: 5px;
  }

  div:nth-child(1) {
    font-weight: bold;
  }
  div:nth-child(2) {
    padding-top: 15px;
    font-size: 14px;
  }
`;
