import React from "react";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";

export const Career = () => {
  return (
    <S.CareerSection>
      <S.HistoryContainer>
        <S.ListWrap>
          <li>
            Activity
            <S.ListPart>
              <li>
                <p>💻 넘블 챌린지 - 지역커뮤니티 앱 만들기</p>
                <p>
                  🥈 2등 수상{" "}
                  <span
                    className="linkBtn"
                    onClick={() => {
                      window.open("https://github.com/sou-so/Souso_Client");
                    }}
                  >
                    Github 보러가기
                  </span>
                </p>
                <p>- 2022.10 ~ 2022.12 제작</p>
              </li>
            </S.ListPart>
          </li>

          <li>
            Education
            <S.ListPart>
              <li>
                <p>📚 PWA 제작 웹앱 프론트엔드 개발 양성과정 A</p>
                <p>
                  - 2021.12 ~ 2022.05 <span>수료</span>
                </p>
              </li>
            </S.ListPart>
          </li>

          <li>
            Graduation
            <S.ListPart>
              <li>
                <p>🎓 가천대학교 생명과학과</p>
                <p>
                  - 2014.03 ~ 2021.02 <span>졸업</span>
                </p>
              </li>

              <li>
                <p>🎓 수성고등학교</p>
                <p>
                  - 2011.03 ~ 2014.02 <span>졸업</span>
                </p>
              </li>
            </S.ListPart>
          </li>
        </S.ListWrap>
      </S.HistoryContainer>

      <S.IntroArticle>
        <h2>Introduce</h2>

        <S.ArticleTitle>
          <FontAwesomeIcon icon={faQuoteLeft} className="quoteIcon" />
          <h3>세포에서 IT로, 호기심 많은 Developer</h3>
          <FontAwesomeIcon icon={faQuoteRight} className="quoteIcon" />
        </S.ArticleTitle>

        <S.ArticleContents>
          <p>
            생명과학을 전공하고 세포를 다루는 연구원이란 꿈에서, 이제는
            개발언어를 다루는 <strong>Front-End 개발자</strong>란 꿈을 꾸고
            있습니다.
          </p>
          <p>
            <strong>Vanilla JS</strong>를 이해하기 위해 <strong>ES6+</strong>에
            대하여 공부하고 있으며, <strong>React JS</strong>를 이용한
            SPA프로젝트에 관심을 가지고 있습니다.
          </p>
          <p>
            또한 안정적인 개발환경을 만들고, 의도치 않은 프로그램의 실행을 막기
            위해 <strong>TypeScript</strong>에 대해서 공부하며 타입시스템을
            도입하려 하고 있습니다.
          </p>
          <p>
            <strong>" 기억보단 기록이 정확하다. "</strong>란 말에 따라서 공부한
            내용과 작업한 내용을 '나를 위한 글을 쓴다'는 생각으로 블로그에 글을
            작성하고 있으며, 이후에도 필요할 때 이전 기록을 참고하며 익히고
            있습니다.
          </p>
        </S.ArticleContents>
      </S.IntroArticle>
    </S.CareerSection>
  );
};
