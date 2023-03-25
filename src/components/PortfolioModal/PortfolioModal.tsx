import React from "react";
import { product } from "types/type";

import ModalContent from "./ModalContent/ModalContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

interface Props {
  data: product;
  toggleClose: () => void;
}

const PortfolioModal = (props: Props) => {
  const { data, toggleClose } = props;

  return (
    <S.ModalBackground onClick={toggleClose}>
      <S.ModalWrap onClick={(e) => e.stopPropagation()}>
        <ModalContent data={data} />

        <S.ExitButton onClick={toggleClose}>
          <FontAwesomeIcon icon={faX} />
        </S.ExitButton>
      </S.ModalWrap>
    </S.ModalBackground>
  );
};

export default PortfolioModal;
