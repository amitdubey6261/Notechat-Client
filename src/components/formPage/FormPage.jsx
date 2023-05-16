import React from 'react'

import './formPage.css';


const FormPage = () => {
    return (
        <>
            <div className='form-container'>
                <div className="form-section">
                    <div className="form-l-ud">
                        <div className='left-up-wrapper'>
                            <div className=""><span className='overlay-t'>CONATCT</span></div>
                            <div className=""><span className='overlay-t-2'>CONNECT WITH AMIT </span></div>
                            <div className=""><span>You got problem hire me as a developer</span></div>
                            <div className='contact-text'>
                                <p>
                                    <span>
                                        Curious about Amit? feel free to get in touch with him via his social media handles or drop him a message via the contact form below.
                                        he will get back to you godspeed. #KeepGoing.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="form-l-ud">
                        <div className="left-down-wrapper">
                            <div className="leftRight">
                                <div><span className='overlay-t'>LOCATE ME</span></div>
                                <div><span className='overlay-t-2'>HOME TOWN</span></div>
                                <div><span >Mangla Vihar - II Tiranga Chauraha Kanpur Uttar Pradesh INDIA (208021)</span></div>
                                <div><button className='btn' id='login-box'><span>Open Map</span></button></div>
                            </div>
                            <div className="leftRight">
                                <div><span className='overlay-t'>LOCATE ME</span></div>
                                <div><span className='overlay-t-2'>CURRENT</span></div>
                                <div><span>Jaypee University Of Engineering And Technology Guna Vikram Aditya Bhawan Madhya Pradesh INDIA</span></div>
                                <div><button className='btn' id='login-box'><span>Open Map</span></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-section-right">
                    <div className="form-container">
                        <form action="">
                            <div className='overlay-t'>CONTACT</div>
                            <div > <span className='overlay-t-2'>SEND ME A MESSAGE</span></div>
                            <input type="text" name="name" id="name" placeholder='Enter Name' />
                            <input type="email" name="name" id="name" placeholder='Enter Email' />
                            <input type="number" name="name" id="name" placeholder='Enter Contact' />
                            <textarea placeholder='Type Here' className='text-area' name="explain" id="" cols="30" rows="10"></textarea>
                            <button type='submit' className='form-submit-btn'><span>Submit</span></button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FormPage