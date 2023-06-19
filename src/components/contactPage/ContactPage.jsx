import React from 'react'

import i16 from '../../assets/images/New folder/i16.webp';

import FormPage from '../formPage/FormPage';

const ContactPage = () => {
    return (
        <>
            <main>
                <div className="image-wrapper">
                    <img id='image' src={i16} alt="not-found" />
                    <div className="image-overlay">
                        <div className="box-outer" id="colored"></div>
                        <div className="box-outer" id="text">
                            <div className="img-o-c-t "><span className='overlay-t' id="">CONNECT</span></div>
                            <div className="img-o-c-t"><h2 id=""> <span className='overlay-t-2'>CONNECT WITH AMIT </span></h2></div>
                            <div className="img-o-c-t"><span id="">Be in contact with full stack developer</span></div>
                        </div>
                    </div>
                </div>
                <FormPage/>
            </main>
        </>
    )
}

export default ContactPage