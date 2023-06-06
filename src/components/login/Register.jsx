import React from 'react'

import './login.css';

import img from '../../assets/images/img1.png';

import LoginRegisterHead from './LoginRegisterHead';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {

    const dispatch = useDispatch();
    const { registerDisplay } = useSelector((state) => state.Register)

    const handleCloseBtn = () => {
        dispatch({
            type: "toggleRegister"
        })
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
                    <input className='inp-fields' type="text" placeholder='name' />
                    <input className='inp-fields' type='email' placeholder='email' />
                    <input className='inp-fields' type='password' placeholder='password' />
                    <input className='inp-fields' type="text" placeholder='collage' />
                    <input className='inp-fields' type='number' placeholder='contact' />
                    <input className='inp-fields' type="number" placeholder='year' />
                    <input className='inp-fields' type="text" placeholder='gender' />
                    <input className='inp-fields' type="text" placeholder='city' />
                    <input className='inp-fields' type="text" placeholder='course' />
                    <input className='inp-fields' type="text" placeholder='upiID' />
                </div>
                <button className='form-submit-btn'><span>Register</span></button>
            </div>
            <div className="login-image"><img className='login-image-img' src={img} alt="" /></div>
        </div>
    )
}

export default Register