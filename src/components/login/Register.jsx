import React from 'react'

import './login.css';

import img from '../../assets/images/img1.png';

import LoginRegisterHead from './LoginRegisterHead';

const Register = () => {
    return (
        <div className='Login-wrapper'>
            <div className="login-content">
                <div className='login-head'>
                    <LoginRegisterHead/>
                </div>
                <input className='inp-fields' type="text" placeholder='First Name' />
                <input className='inp-fields' type="text" placeholder='Last Name' />
                <input className='inp-fields' type="text" placeholder='Phone Number' />
                <input className='inp-fields' placeholder='email' type="email" name="" id="email" />
                <input className='inp-fields' placeholder='password' type="password" name="" id="password" />
                <input className='inp-fields' placeholder='confirm password' type="password" name="" id="password" />
                <span className='forget-pass'>Forgot Password</span>
                <button className='login-btn'><span>Register</span></button>
            </div>
            <div className="login-image"><img className='login-image-img' src={img} alt="" /></div>
        </div>
    )
}

export default Register