import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './homePage.css'

import i1 from '../../assets/images/New folder/i1.jpg';

import i7 from '../../assets/images/New folder/i7.jpg';
import i8 from '../../assets/images/New folder/i8.png';
import i5 from '../../assets/images/New folder/i5.jpg';

import i10 from '../../assets/images/New folder/i10.jpg';
import i11 from '../../assets/images/New folder/i11.jpg';
import i12 from '../../assets/images/New folder/i12.jpg';

import i19 from '../../assets/images/New folder/i19.webp';
import i20 from '../../assets/images/New folder/i20.webp';
import i17 from '../../assets/images/New folder/i17.webp';



import 'swiper/css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const mobile = (window.outerWidth < 600) ? true : false;
    return (
        <>
            <main className='home-main'>
                <div className='home-page-crousal'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                    >
                        <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={i19} alt="not-found" /></div></SwiperSlide>
                        <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={i20} alt="not-found" /></div></SwiperSlide>
                        <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={i17} alt="not-found" /></div></SwiperSlide>
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
                    <img className='home-intro-img' src={i1} alt="not-found" />
                    <div className='home-intro-img-overlay'>
                        <div className='intro-content'><span> those who never settle for anything else</span></div>
                        <div className='intro-content-2'>
                            <div className="i-c-2-heading"> those who never settle for anything less </div>
                            <div className='i-c-2-heading-2'>Join India’s most exciting homegrown study community.</div>
                            <div className="i-c-2-btn">
                                <button className='style-btn style-btn-1'>join</button>
                                <button className='style-btn style-btn-2'><Link to="/about"><span>ntc</span></Link></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-into-wrapper warapper-2">
                    <div className="colored-boundary"></div>
                    <div className="crousal-wrapper-2">
                        <Swiper
                            spaceBetween={ mobile ? 0 : 10 }
                            slidesPerView={mobile ? 1 : 3}
                        >
                            <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={i7} alt="not-found" /></div></SwiperSlide>
                            <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={i8} alt="not-found" /></div></SwiperSlide>
                            <SwiperSlide><div className='crousal-img-container'><img className='crousal-img' src={i5} alt="not-found" /></div></SwiperSlide>

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
                        <button className='find-notes-btn'><Link to="/collection"><span>find notes</span></Link></button>
                    </div>
                    <div className="colored-boundary"></div>
                </div>
            </main>
        </>
    )
}

export default HomePage