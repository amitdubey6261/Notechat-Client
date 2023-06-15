import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import './navbar.css'
import LoginBtn from './LoginBtn';
import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn';

const Navbar = () => { 
    const { status } = useSelector( state=>state.loadUserReducer );
    return (
        <>
            <nav >
                <div className="nav-o-c"><span>NOTECHAT</span></div>
                <div className="nav-o-c" id='nac-o-i'>
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