import React from 'react'

import { Link } from 'react-router-dom'

import './navbar.css'
const Navbar = () => {
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
                <div className="nav-o-c " id='login-box'><span>LOGIN</span></div>
            </nav>
        </>
    )
}

export default Navbar