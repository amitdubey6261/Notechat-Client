import React, { useState } from 'react'

import './formPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendMail } from '../../Redux/local/contactPage';
import Loader from '../loader/Loader';


const FormPage = () => {
    const dispatch = useDispatch();
    const [ fields , setfields ] = useState({
        name : "" , 
        email : "" , 
        contact : "" , 
        query : "" , 
    })

    const {loading} = useSelector( state=>state.sendEmailReducer )

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        dispatch(sendMail(fields));
    }

    const handleFormChange = (e) =>{
        setfields({ ...fields , [e.target.name] : e.target.value });
    }


    return (
        <>
            {
                loading && <Loader text={"sending..."}/>
            }
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
                                <div><button className='btn-fp' id='login-box'><a href="https://goo.gl/maps/yy3YJuqQoYbcoXM17"><span> Open Map</span></a></button></div>
                                <a href="https://goo.gl/maps/yy3YJuqQoYbcoXM17"></a>
                            </div>
                            <div className="leftRight">
                                <div><span className='overlay-t'>LOCATE ME</span></div>
                                <div><span className='overlay-t-2'>CURRENT</span></div>
                                <div><span>Jaypee University  Raghogarh  Madhya Pradesh INDIA </span></div>
                                <div><button className='btn-fp' id='login-box'><a href="https://goo.gl/maps/uhRvFkT1fBBxTWo8A"><span> Open Map</span></a>   </button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-section-right-fp">
                    <div className="form-container" onSubmit={handleFormSubmit}>
                        <form id='aboutForm' action="">
                            <div className='overlay-t'>CONTACT</div>
                            <div > <span className='overlay-t-2'>SEND ME A MESSAGE</span></div>
                            <input className='inp-fields' onChange={handleFormChange} value={fields.name} type="text" name="name" id="name" placeholder='Enter Name' />
                            <input className='inp-fields' onChange={handleFormChange} value={fields.email} type="email" name="email" id="name" placeholder='Enter Email' />
                            <input className='inp-fields' onChange={handleFormChange} value={fields.contact} type="number" name="contact" id="name" placeholder='Enter Contact' />
                            <textarea  placeholder='Type Here' onChange={handleFormChange} value={fields.query} className=' inp-fields text-area' name="query" id="" cols="30" rows="10"></textarea>
                            <input className='login-btn' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FormPage