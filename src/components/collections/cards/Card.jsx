import React, { useRef } from "react";
import "./card.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { useDispatch } from "react-redux";
import { getProductDetails } from "../../../Redux/local/GetProductDetails";
import { useNavigate } from "react-router-dom";

const Card = ( {props} ) => {
  
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handleCardClick = () => {
    dispatch(getProductDetails(props._id));

    navigate("/product");
    
  };

  const arrorStyle = {
    overflow: "hidden",
  };

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="crousal-img-container">
              <img className="crousal-img" src={ props.thums.thum1.url } alt="not-found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="crousal-img-container">
              <img className="crousal-img" src={props.thums.thum2.url} alt="not-found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="crousal-img-container">
              <img className="crousal-img" src={props.thums.thum3.url} alt="not-found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="crousal-img-container">
              <img className="crousal-img" src={props.thums.thum4.url} alt="not-found" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="card-overlay">
          <div className="card-info-container">
            <marquee hspace="1" className="marq"  behavior="" direction="up">
              <ul className="cic-info">
                <li className="cic-info-text"><span className="info-text-head">created by : </span> {`${props.createdby}`} </li>
                <li className="cic-info-text"><span className="info-text-head">subject is : </span> {`${props.subject}`} </li>
                <li className="cic-info-text"><span className="info-text-head">collage of : </span> {`${props.collage}`} </li>
                <li className="cic-info-text"><span className="info-text-head">faculty is : </span>{`${props.faculty}`} </li>
                <li className="cic-info-text"><span className="info-text-head">rating  is : </span> {`${props.rating}`} </li>
                <li className="cic-info-text"><span className="info-text-head">created on : </span> {`${props.time}`} </li>
              </ul>
            </marquee>
          </div>
        </div>
        <div style={arrorStyle} className="left-arrow-hover-wrapper">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div style={arrorStyle} className="right-arrow-hover-wrapper">
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
    </>
  );
};

export default Card;
