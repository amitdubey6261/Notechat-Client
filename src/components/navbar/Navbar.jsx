import React, { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

import './navbar.css'
import LoginBtn from './LoginBtn';
import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn';

const Navbar = () => { 
    const checkRef = useRef() ; 
    const { status } = useSelector( state=>state.loadUserReducer );

    const l_tgleClick = () =>{
        checkRef.current.click() ; 
    }
    return (
        <>
            <nav className='navu'>
                <div onClick={l_tgleClick} className="ham-i">HAM</div>
                <div className="nav-o-c"><span>NOTECHAT</span></div>
                <input ref={checkRef} type='checkbox' id='checkbox' />
                <div className="nav-o-c" id='nac-o-i'>
                    <div onClick={l_tgleClick}  className="ham-i">HAM</div>
                    <div className="navigate"><Link to='/'><span>Home</span></Link></div>
                    <div className="navigate"><Link to='/collection'><span>Collection</span></Link></div>
                    <div className="navigate"><Link to="/about"><span>About</span></Link></div>
                    <div className="navigate"><Link to="/contact"><span>Contact</span></Link></div>
                </div>
                { status ? <LogoutBtn/> : <LoginBtn/> }
            </nav>
        </>
    )

}

export default Navbar ; 