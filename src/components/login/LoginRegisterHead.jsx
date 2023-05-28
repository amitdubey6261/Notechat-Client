import React from 'react'

import './login.css';

const LoginRegisterHead = () => {
  return (
    <div className='heading'>
        {/* <div className='logo'><img src={img} alt="not-found" /></div> */}
        <div className='head-style heading-login-1'>#KEEPLEARNING</div>
        <div className='head-style heading-login-2'>indias biggest learning community</div>
        <div className='head-style heading-login-3'>new to our community ? <span className='register-here'>Click Here To Register</span></div>
    </div>
  )
}

export default LoginRegisterHead