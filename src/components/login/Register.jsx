import React from 'react'

import './login.css';

import img from '../../assets/images/img1.png';

import LoginRegisterHead from './LoginRegisterHead';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {

    const dispatch = useDispatch();
    const { registerDisplay } = useSelector((state) => state.LoginRegister)

    const handleCloseBtn = () => {
        dispatch({
            type: "toggleRegister"
        })
    }

    return (
        <div className='Login-wrapper' style={{ display: registerDisplay ? 'flex' : 'none' }}>
            <div className="close-button" onClick={handleCloseBtn}>X</div>
            <div className="login-content">
                <div className='login-head'>
                    <LoginRegisterHead />
                </div>
                <input className='inp-fields' type="text" placeholder='First Name' />
                <input className='inp-fields' type="text" placeholder='Last Name' />
                <input className='inp-fields' type="text" placeholder='Phone Number' />
                <input className='inp-fields' placeholder='email' type="email" name="" id="email" />
                <input className='inp-fields' placeholder='password' type="password" name="" id="password" />
                <input className='inp-fields' placeholder='confirm password' type="password" name="" id="password" />
                <button className='login-btn'><span>Register</span></button>
            </div>
            <div className="login-image"><img className='login-image-img' src={img} alt="" /></div>
        </div>
    )
}

export default Register