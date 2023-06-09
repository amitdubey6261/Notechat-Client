import React, { useState } from 'react'
import './login.css';

import img from '../../assets/images/img1.png';

import LoginRegisterHead from './LoginRegisterHead';
import { useDispatch, useSelector } from 'react-redux';
import { registrationRequest } from '../../Redux/local/RegistrationPage';

const Register = () => {
    const dispatch = useDispatch();
    const { registerDisplay , res , status } = useSelector((state) => state.Register) ; 
    // const { jwt } = useSelector(( state ) => state.
    const [ fields , setfields ] = useState({ 
        name : "" , 
        email : "" , 
        password : "" , 
        collage : "" , 
        contact : "" , 
        year : "" , 
        gender : "" , 
        city : "" , 
        course : "" , 
        upiid : "" , 
    })

    const onchangeHandler = ( e ) =>{
        setfields({ ...fields , [e.target.name] : e.target.value }); 
    }

    const validateAndSubmit = ( e ) =>{
        e.preventDefault();
        dispatch(registrationRequest(fields));
    }  

    const handleCloseBtn = () => {
        dispatch({
            type: "toggleRegister"
        });
    }

    return (
        <div className='Login-wrapper' style={{ display: registerDisplay ? 'flex' : 'none' }}>
            <div className="close-button" onClick={handleCloseBtn}>X</div>
            <div className="login-content">
                <LoginRegisterHead />
                <div className="registration-form">
                    <div className='register-avatar'>
                        <input type="file" className='inp-fields' />
                    </div>
                    <input onChange={onchangeHandler} name="name" value={fields.name} className='inp-fields' type="text" placeholder='name' />
                    <input onChange={onchangeHandler} name="email" value={fields.email} className='inp-fields' type='email' placeholder='email' />
                    <input onChange={onchangeHandler} name="password" value={fields.password} className='inp-fields' type='password' placeholder='password' />
                    <input onChange={onchangeHandler} name="collage" value={fields.collage} className='inp-fields' type="text" placeholder='collage' />
                    <input onChange={onchangeHandler} name="contact" value={fields.contact} className='inp-fields' type='number' placeholder='contact' />
                    <input onChange={onchangeHandler} name="year" value={fields.year} className='inp-fields' type="number" placeholder='year' />
                    <input onChange={onchangeHandler} name="gender" value={fields.gender} className='inp-fields' type="text" placeholder='gender' />
                    <input onChange={onchangeHandler} name="city" value={fields.city} className='inp-fields' type="text" placeholder='city' />
                    <input onChange={onchangeHandler} name="course" value={fields.course} className='inp-fields' type="text" placeholder='course' />
                    <input onChange={onchangeHandler} name="upiid" value={fields.upiid} className='inp-fields' type="text" placeholder='UPI ID' />
                </div>
                <button className='form-submit-btn' onClick={validateAndSubmit}><span>Register</span></button>
            </div>
            <div className="login-image"><img className='login-image-img' src={img} alt="" /></div>
        </div>
    )
}

export default Register