import React from 'react';
import './Portfolio.css';
import product from './portfolio.json';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = () => {

  const portList = [
    {id:0, category: product.portfolio1},
    {id:1, category: product.portfolio2},
    {id:2, category: product.portfolio3},
    {id:3, category: product.portfolio4},
    {id:4, category: product.portfolio5},
  ];

  const handleNoUrl = () => {
    alert("해당 프로젝트의 링크는 준비중입니다.\n빠른 시일 내에 준비하도록 하겠습니다, 죄송합니다.")
  }

  return (
    <section id='port_section'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {portList.map( data => (
            <SwiperSlide
              key={data.id}
            >
              <div className='slideBox'>
                <div className='portImg'>
                  <img src={data.category.photo} alt={data.category.title} />
                </div>
  
                <div className='portDesc'>
                  <h3>{data.category.title}</h3>
                  <h4>✍ 언어 : {data.category.language}</h4>
                  <h4>✍ 설명</h4>
                  <p>{data.category.desc1}</p>
                  <p>{data.category.desc2}</p>
                  <p>{data.category.desc3}</p>
                </div>
              </div>

              <div
                className='toPort'
                onClick={data.category.url ? () => {window.open(data.category.url)} : () => handleNoUrl()}
              ><span>이동하기</span></div>
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;