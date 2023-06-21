import React from 'react'

import './login.css';
import { useDispatch, useSelector } from 'react-redux';

const LoginRegisterHead = () => {

  const dispatch = useDispatch();
  const { loginDisplay } = useSelector( state=>state.Login )

  const handleToggle = () => {
    dispatch({
      type: "toggleLogin"
    })

    dispatch({
      type : "toggleRegister"
    })
  }

  return (
    <div className='heading'>
      {/* <div className='logo'><img src={img} alt="not-found" /></div> */}
      <div className='head-style heading-login-1'>#KEEPLEARNING</div>
      <div className='head-style heading-login-2'>indias biggest learning community</div>
      <div className='head-style heading-login-3'>new to our community ? <span className='register-here'  onClick={handleToggle}>Click Here To { loginDisplay ? <span style={{color: 'red'}}>register</span> : <span style={{color: 'red'}}>login</span>  }</span></div>
    </div>
  )
}

export default LoginRegisterHead