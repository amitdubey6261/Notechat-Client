import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './createproduct.css';

import image from '../../assets/images/myimg4.png';

const CreateNote = () => {

    const thumnail1ref = useRef(null);
    const thumnail2ref = useRef(null);
    const thumnail3ref = useRef(null);
    const thumnail4ref = useRef(null);
    const [thumbnail1, setthumbnail1] = useState(null);
    const [thumbnail2, setthumbnail2] = useState(null);
    const [thumbnail3, setthumbnail3] = useState(null);
    const [thumbnail4, setthumbnail4] = useState(null);

    const handleThumb1Click = () => {
        thumnail1ref.current.click();
    }
    const handleThumb2Click = () => {
        thumnail2ref.current.click();
    }
    const handleThumb3Click = () => {
        thumnail3ref.current.click();
    }
    const handleThumb4Click = () => {
        thumnail4ref.current.click();
    }

    const handleThumb1Change = (e) => {
        const thumnailimage1 = e.target.files[0];
        console.log(thumnailimage1);
        setthumbnail1(thumnailimage1);
    }
    const handleThumb2Change = (e) => {
        const thumnailimage2 = e.target.files[0];
        console.log(thumnailimage2);
        setthumbnail2(thumnailimage2);
    }
    const handleThumb3Change = (e) => {
        const thumnailimage3 = e.target.files[0];
        console.log(thumnailimage3);
        setthumbnail3(thumnailimage3);
    }
    const handleThumb4Change = (e) => {
        const thumnailimage4 = e.target.files[0];
        console.log(thumnailimage4);
        setthumbnail4(thumnailimage4);
    }

    return (
        <div className='craete-product-wrapper'>
            <div className="image-wrapper">
                <img id='image' src={image} alt="not-found" />
                <div className="image-overlay">
                    <div className="box-outer" id="colored"></div>
                    <div className="box-outer" id="text">
                        <div className="img-o-c-t "><span className='overlay-t' id="">CONNECT</span></div>
                        <div className="img-o-c-t"><h2 id=""> <span className='overlay-t-2'>CONNECT WITH AMIT </span></h2></div>
                        <div className="img-o-c-t"><span id="">Be in contact with full stack developer</span></div>
                    </div>
                </div>
            </div>
            <div className="form-section-wrapper">
                <div className="form-section-inner">
                    <div className="form-section-left">
                        <div className="heading-1">i am amit who are you</div>
                        <div className="heading-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, at quibusdam dicta optio ullam unde. Corrupti, porro. Et perferendis minima necessitatibus sequi natus ea explicabo porro tenetur qui architecto distinctio maiores officia dolor magni, eum earum magnam eius harum fugit. Tempora fugit inventore animi tempore perspiciatis? Ex autem quisquam consequatur.</div>
                        <div className="border"></div>
                        <div className="heading-4">THUBNAIL</div>
                        <div className="thumbnail-wrapper">
                            <Swiper slidesPerView={1} spaceBetween={10}>


                                <SwiperSlide>
                                    <div className="image-container">
                                        {
                                            thumbnail1 ? (<img className='thumbnail' src={URL.createObjectURL(thumbnail1)} alt="" />) : (<img className='thumbnail' src={image} alt="" />)
                                        }
                                        <input className='file-input-field' type="file" onChange={handleThumb1Change} ref={thumnail1ref} name="thubnail1" id="thumbnail" />
                                        <div onClick={handleThumb1Click} className="thumnail-overlay">
                                            <div className="thumbnail-text">Thumbnail1  Click to Add Image</div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="image-container">
                                        {
                                            thumbnail2 ? (<img className='thumbnail' src={URL.createObjectURL(thumbnail2)} alt="" />) : (<img className='thumbnail' src={image} alt="" />)
                                        }
                                        <input className='file-input-field' type="file" onChange={handleThumb2Change} ref={thumnail2ref} name="thubnail2" id="thumbnai2" />
                                        <div onClick={handleThumb2Click} className="thumnail-overlay">
                                            <div className="thumbnail-text">Thumbnail2  Click to Add Image</div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="image-container">
                                        {
                                            thumbnail3 ? (<img className='thumbnail' src={URL.createObjectURL(thumbnail3)} alt="" />) : (<img className='thumbnail' src={image} alt="" />)
                                        }
                                        <input className='file-input-field' type="file" onChange={handleThumb3Change} ref={thumnail3ref} name="thubnail3" id="thumbnail3" />
                                        <div onClick={handleThumb3Click} className="thumnail-overlay">
                                            <div className="thumbnail-text">Thumbnail3  Click to Add Image</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image-container">
                                        {
                                            thumbnail4 ? (<img className='thumbnail' src={URL.createObjectURL(thumbnail4)} alt="" />) : (<img className='thumbnail' src={image} alt="" />)
                                        }
                                        <input className='file-input-field' type="file" onChange={handleThumb4Change} ref={thumnail4ref} name="thubnail4" id="thumbnail4" />
                                        <div onClick={handleThumb4Click} className="thumnail-overlay">
                                            <div className="thumbnail-text">Thumbnail4  Click to Add Image</div>
                                        </div>
                                    </div>
                                </SwiperSlide>


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
                    </div>
                    <div className="form-section-right">
                        <div className="heading-1">Input Details</div>
                        <input className='text-fields' type="text" placeholder='university-name' name="university-name" id="" />
                        <input className='text-fields' type="text" placeholder='subject-name' name="subject-name" id="" />
                        <input className='text-fields' type="text" placeholder='faculty-name' name="faculty-name" id="" />
                        <input className='text-fields' type="text" placeholder='university-name' name="university-name" id="" />
                        <input className='text-fields' type="text" placeholder='university-name' name="university-name" id="" />
                        <input className='text-fields' type="file" placeholder='university-name' name="university-name" id="" />
                        <input className='submit-btn' type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNote