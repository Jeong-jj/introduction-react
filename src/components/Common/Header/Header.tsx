import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.ContactBox>
        <S.BtnWrap>
          <FontAwesomeIcon icon={faEnvelope} className="sendMail" />
          <a href="mailto:rgfdds98@gamil.com">Contact</a>
        </S.BtnWrap>
      </S.ContactBox>

      <S.Title>
        <Link to={"/"}>Daily Portfolio</Link>
      </S.Title>

      <S.SnsWrap>
        <li>
          <FontAwesomeIcon
            icon={faGithub}
            className="snsIcon gitLink"
            onClick={() => {
              window.open("https://github.com/Jeong-jj");
            }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faVimeo}
            className="snsIcon velogLink"
            onClick={() => {
              window.open("https://velog.io/@rgfdds98");
            }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faInstagram}
            className="snsIcon instaLink"
            onClick={() => {
              window.open("http://instagram.com/ot.zoa");
            }}
          />
        </li>
      </S.SnsWrap>
    </S.HeaderContainer>
  );
};
