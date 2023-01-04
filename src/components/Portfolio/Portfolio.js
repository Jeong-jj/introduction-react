import React from "react";
import data from "../../data/portfolio.json";
import * as S from "./styles";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Portfolio = () => {
  const portfolio = data.portfolio;

  const NoUrl = () => {
    alert(
      "해당 프로젝트의 링크는 준비중입니다.\n빠른 시일 내에 준비하도록 하겠습니다, 죄송합니다."
    );
  };

  return (
    <S.SectionContainer>
      <S.Title>This is what I made</S.Title>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {portfolio.map((data) => (
          <SwiperSlide key={data.id}>
            <S.SlideWrap>
              <S.ImgWrap>
                <img src={data.img} alt={data.title} />
              </S.ImgWrap>

              <S.DescWrap>
                <h3>{data.title}</h3>
                <p>✍ 언어 : {data.language}</p>
                <p>✍ 설명</p>
                <S.DescText>
                  {data.desc.length > 0 &&
                    data.desc.map((data) => <p>{data}</p>)}
                </S.DescText>
              </S.DescWrap>
            </S.SlideWrap>

            <S.LinkBtn
              onClick={
                data.url
                  ? () => {
                      window.open(data.url);
                    }
                  : () => NoUrl()
              }
            >
              <span>이동하기</span>
            </S.LinkBtn>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SectionContainer>
  );
};
