import React from "react";

import img from "../../../assets/images/myimg2.png";

import { Swiper, SwiperSlide } from "swiper/react";

const ThumbsPP = ({ res }) => {
  console.log( res )
  return (
    <>
      <div className="thumbsWrapper">
        <div className="tw-up-overlay"></div>
        <div className="tw-btm-overlay"></div>
        <div className=""></div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="pp-img-container">
              <img className="pp-crousal-img" src={res.data.notes.thums.thum1.url} alt="not-found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pp-img-container">
              <img className="pp-crousal-img" src={res.data.notes.thums.thum2.url} alt="not-found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pp-img-container">
              <img className="pp-crousal-img" src={res.data.notes.thums.thum3.url} alt="not-found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pp-img-container">
              <img className="pp-crousal-img" src={res.data.notes.thums.thum4.url} alt="not-found" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ThumbsPP;
