import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './HomePage.css'

import img from '../../assets/images/img1.png';
import img2 from '../../assets/images/myimg.png';
import img3 from '../../assets/images/myimg2.png';
import img4 from '../../assets/images/myimg3.png';

import 'swiper/css';

const HomePage = () => {
    return (
        <>
            <div className='home-page-crousal'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img} alt="not-found" /></div></SwiperSlide>
                    <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img2} alt="not-found" /></div></SwiperSlide>
                    <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img3} alt="not-found" /></div></SwiperSlide>
                    <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img4} alt="not-found" /></div></SwiperSlide>
                </Swiper>
                <div className="left-arrow-hover-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="right-arrow-hover-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className='home-into-wrapper'>
                <img className='home-intro-img' src={img2} alt="not-found" />
                <div className='home-intro-img-overlay'>
                    <div className='intro-content'><span> those who never settle for anything else</span></div>
                    <div className='intro-content-2'>
                        <div className="i-c-2-heading"> those who never settle for anything less </div>
                        <div className='i-c-2-heading-2'><span>Join India’s most exciting homegrown study community.</span></div>
                        <div className="i-c-2-btn">
                            <button className='style-btn style-btn-1'>join</button>
                            <button className='style-btn style-btn-2'>ntc </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-into-wrapper warapper-2">
                <div className="colored-boundary"></div>
                <div className="crousal-wrapper-2">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img3} alt="not-found" /></div></SwiperSlide>
                        <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img} alt="not-found" /></div></SwiperSlide>
                        <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img} alt="not-found" /></div></SwiperSlide>
                        <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img} alt="not-found" /></div></SwiperSlide>
                        <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img} alt="not-found" /></div></SwiperSlide>
                        <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={img} alt="not-found" /></div></SwiperSlide>

                    </Swiper>
                    <div className="left-arrow-hover-wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="right-arrow-hover-wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="content">
                    <div className='wrapper-2-head-1'>NTC NOTES</div>
                    <div className='wrapper-2-head-2'>CHALLENGE YOUR LIMITS</div>
                    <div className='wrapper-2-head-3'>Be a part of the notes that’s limitless</div>
                    <p className='wrapper-2-content'>Are you looking for how to prepare in exams? Then you have it all with notechat notes that are specially designed with your collage allumni to kickstart your exams journey. Then why limit yourselves when having your fitness convenience in your own hands with Hrx.</p>
                    <div className='wrapper-2-metric'>
                        <div className="metric-1"></div>
                        <div className="metric-2"></div>
                        <div className="metric-3"></div>
                    </div>
                    <button className='find-notes-btn'>find notes</button>
                </div>
                <div className="colored-boundary"></div>
            </div>
        </>
    )
}

export default HomePage