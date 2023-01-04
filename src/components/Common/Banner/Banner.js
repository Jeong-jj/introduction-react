import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

export const Banner = () => {
  return (
    <S.MyProfile>
      <S.PictureFrame>
        <div className="myPic"></div>
      </S.PictureFrame>

      <S.AboutMe>
        <S.DescTitle>
          <p>Front-End Developer</p>
          <p>Rookie</p>
          <p>with great potential</p>
        </S.DescTitle>

        <S.DescContents>
          <S.MyInfo>
            <p>조정준</p>
            <p>
              <FontAwesomeIcon icon={faCakeCandles} />
              <span>1995. 10. 15</span>
            </p>
          </S.MyInfo>

          <S.Articloid>
            <p>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <strong>
                행동한 뒤에 남은 후회는 하지 않았을 때의 후회보다 가치있다.
              </strong>
              <FontAwesomeIcon icon={faQuoteRight} />
            </p>
            <p>' 왜 그럴까? '를 고민하는 프로그래머</p>
            <p>배우는 것을 두려워 하지 않는 프로그래머</p>
          </S.Articloid>
        </S.DescContents>
      </S.AboutMe>
    </S.MyProfile>
  );
};
