import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './login.css';
import img from '../../assets/images/img1.png';
import LoginRegisterHead from './LoginRegisterHead';

const Login = () => {
    const dispatch = useDispatch();
    const { loginDisplay } = useSelector(state => state.Login );

    const handleCloseBtn = () => {
        dispatch({
            type: "toggleLogin"
        })
    }

    return (
        <div className='Login-wrapper' style={{ display: loginDisplay ? 'flex' : 'none' }} >
            <div className="login-content">
                <LoginRegisterHead />
                <div className="register-form">
                    <input className='inp-fields' placeholder='email' type="email" name="" id="email" />
                    <input className='inp-fields' placeholder='password' type="password" name="" id="password" />
                    <span className='forget-pass'>Forgot Password</span>
                    <button className='form-submit-btn'><span>login</span></button>
                </div>
            </div>
            <div className="login-image"><img className='login-image-img' src={img} alt="" /></div>
            <div className="close-button" onClick={handleCloseBtn}>X</div>
        </div>
    )
}

export default Login