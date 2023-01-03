import React from "react";
import data from "../../data/portfolio.json";
import "./Portfolio.css";

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
    <section id="port_section">
      <h1 className="port-tit">This is what I made</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {portfolio.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="slideBox">
              <div className="portImg">
                <img src={data.photo} alt={data.title} />
              </div>

              <div className="portDesc">
                <h3>{data.title}</h3>
                <h4>✍ 언어 : {data.language}</h4>
                <h4>✍ 설명</h4>
                <div className="descBox">
                  {data.desc.map((data) => (
                    <p>{data}</p>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="toPort"
              onClick={
                data.url
                  ? () => {
                      window.open(data.url);
                    }
                  : () => NoUrl()
              }
            >
              <span>이동하기</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
