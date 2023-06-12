import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./createproduct.css";

import image from "../../assets/images/myimg4.png";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../../Redux/local/CreateNotes";

const CreateNote = () => {
    const form = useRef();
    const dispatch = useDispatch() ; 

    const { res , status } = useSelector((state) => state.loadUserReducer);

    const [fields, setfields] = useState({
        subject: "",
        faculty: "",
        aboutpdf: "",
        index: "",
        thumbnail1 : null , 
        thumbnail2 : null , 
        thumbnail3 : null , 
        thumbnail4 : null , 
    });
    
    const [objurl ,  setobjUrl] = useState({
        thumbnail1 : null , 
        thumbnail2 : null , 
        thumbnail3 : null , 
        thumbnail4 : null , 
    })

    const [ file , setfile ] = useState({
        file : null 
    })

    const handleFileChange = (e) =>{
        const file = e.target.files[0] ; 
        const reader = new FileReader();
        reader.readAsDataURL( file );
        reader.onloadend = () =>{
            setfile(reader.result);
        }
    }
    
    const handleFormChange = (e) => {
        setfields({ ...fields, [e.target.name]: e.target.value });
    };
    
    const handleThumbchange = (e) =>{
        const file = e.target.files[0] ; 
        setobjUrl({...objurl , [e.target.name] : file });
        setFileToBase( file , e ); 
    }
    
    const setFileToBase = ( file , e ) =>{
        const reader = new FileReader() ; 
        reader.readAsDataURL( file );
        reader.onloadend = () =>{
            setfields({ ...fields , [e.target.name] : reader.result })
        }
    }
    
    const formSubmit = (e) =>{
        e.preventDefault();
        if( status == true ){

            const { name  , collage , year } = res.data.user ; 

            const payload = {
                name , 
                collage,
                batchof : year,
                file , 
                ...fields ,
            }

            dispatch(createNote(payload));
        }
        else{
            console.log('login to access')
        }

    }

    const thumnail1ref = useRef(null);
    const thumnail2ref = useRef(null);
    const thumnail3ref = useRef(null);
    const thumnail4ref = useRef(null);


    const handleThumb1Click = (e) => {
        thumnail1ref.current.click();
    };
    const handleThumb2Click = () => {
        thumnail2ref.current.click();
    };
    const handleThumb3Click = () => {
        thumnail3ref.current.click();
    };
    const handleThumb4Click = () => {
        thumnail4ref.current.click();
    };

    return (
        <div className="craete-product-wrapper">
            <div className="image-wrapper">
                <img id="image" src={image} alt="not-found" />
                <div className="image-overlay">
                    <div className="box-outer" id="colored"></div>
                    <div className="box-outer" id="text">
                        <div className="img-o-c-t ">
                            <span className="overlay-t" id="">
                                CONNECT
                            </span>
                        </div>
                        <div className="img-o-c-t">
                            <h2 id="">
                                {" "}
                                <span className="overlay-t-2">CONNECT WITH AMIT </span>
                            </h2>
                        </div>
                        <div className="img-o-c-t">
                            <span id="">Be in contact with full stack developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-section-wrapper">
                <div className="form-section-inner">
                    <div className="form-section-left">
                        <div className="heading-1">i am amit who are you</div>
                        <div className="heading-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                            at quibusdam dicta optio ullam unde. Corrupti, porro. Et
                            perferendis minima necessitatibus sequi natus ea explicabo porro
                            tenetur qui architecto distinctio maiores officia dolor magni, eum
                            earum magnam eius harum fugit. Tempora fugit inventore animi
                            tempore perspiciatis? Ex autem quisquam consequatur.
                        </div>
                        <div className="border"></div>
                        <div className="heading-4">THUMBNAIL</div>
                        <div className="thumbnail-wrapper">
                            <Swiper slidesPerView={1} spaceBetween={10}>
                                <SwiperSlide>
                                    <div className="image-container">
                                        {fields.thumbnail1 ? (
                                            <img
                                                className="thumbnail"
                                                src={URL.createObjectURL(objurl.thumbnail1)}
                                                alt=""
                                            />
                                        ) : (
                                            <img className="thumbnail" src={image} alt="" />
                                        )}
                                        <input
                                            className="file-input-field"
                                            type="file"
                                            onChange={handleThumbchange}
                                            ref={thumnail1ref}
                                            name="thumbnail1"
                                            id="thumbnail"
                                        />
                                        <div
                                            onClick={handleThumb1Click}
                                            className="thumnail-overlay"
                                        >
                                            <div className="thumbnail-text">
                                                Thumbnail1 Click to Add Image
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image-container">
                                        {fields.thumbnail2 ? (
                                            <img
                                                className="thumbnail"
                                                src={URL.createObjectURL(objurl.thumbnail2)}
                                                alt=""
                                            />
                                        ) : (
                                            <img className="thumbnail" src={image} alt="" />
                                        )}
                                        <input
                                            className="file-input-field"
                                            type="file"
                                            onChange={handleThumbchange}
                                            ref={thumnail2ref}
                                            name="thumbnail2"
                                            id="thumbnail2"
                                        />
                                        <div
                                            onClick={handleThumb2Click}
                                            className="thumnail-overlay"
                                        >
                                            <div className="thumbnail-text">
                                                Thumbnail2 Click to Add Image
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image-container">
                                        {fields.thumbnail3 ? (
                                            <img
                                                className="thumbnail"
                                                src={URL.createObjectURL(objurl.thumbnail3)}
                                                alt=""
                                            />
                                        ) : (
                                            <img className="thumbnail" src={image} alt="" />
                                        )}
                                        <input
                                            className="file-input-field"
                                            type="file"
                                            onChange={handleThumbchange}
                                            ref={thumnail3ref}
                                            name="thumbnail3"
                                            id="thumbnail3"
                                        />
                                        <div
                                            onClick={handleThumb3Click}
                                            className="thumnail-overlay"
                                        >
                                            <div className="thumbnail-text">
                                                Thumbnail3 Click to Add Image
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image-container">
                                        {fields.thumbnail4 ? (
                                            <img
                                                className="thumbnail"
                                                src={URL.createObjectURL(objurl.thumbnail4)}
                                                alt=""
                                            />
                                        ) : (
                                            <img className="thumbnail" src={image} alt="" />
                                        )}
                                        <input
                                            className="file-input-field"
                                            type="file"
                                            onChange={handleThumbchange}
                                            ref={thumnail4ref}
                                            name="thumbnail4"
                                            id="thumbnail"
                                        />
                                        <div
                                            onClick={handleThumb4Click}
                                            className="thumnail-overlay"
                                        >
                                            <div className="thumbnail-text">
                                                Thumbnail4 Click to Add Image
                                            </div>
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
                        <form
                            ref={form}
                            className="cp-form"
                            encType="multipart/form-data"
                            action=""
                            onSubmit={formSubmit}
                        >
                            <h1 className="cp-form-heading">create product form </h1>
                            <input type="file" onChange={handleFileChange} className="text-fields" name="file" />
                            <input
                                className="text-fields"
                                type="text"
                                placeholder="subject"
                                name="subject"
                                value={fields.subject}
                                onChange={handleFormChange}
                            />
                            <input
                                className="text-fields"
                                type="text"
                                placeholder="faculty"
                                name="faculty"
                                value={fields.faculty}
                                onChange={handleFormChange}
                            />
                            <textarea
                                className="text-fields"
                                type="text"
                                placeholder="about pdf"
                                name="aboutpdf"
                                value={fields.aboutpdf}
                                onChange={handleFormChange}
                            />
                            <textarea
                                className="text-fields"
                                type="text"
                                placeholder="enter index"
                                name="index"
                                value={fields.index}
                                onChange={handleFormChange}
                            />
                            <input
                                type="submit"
                                className="text-fields"
                                value="Submit form"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNote;
