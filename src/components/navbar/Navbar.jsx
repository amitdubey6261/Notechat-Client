import React from 'react'

import { Link } from 'react-router-dom'

import './navbar.css'
const Navbar = () => {
    return (
        <>
            <nav >
                <div className="nav-o-c">NOTECHAT</div>
                <div className="nav-o-c" id='nac-o-i'>
                    <div className="navigate"><Link to='/'>Home</Link></div>
                    <div className="navigate"><Link to="/about">About</Link></div>
                    <div className="navigate"><Link to="/contact">Contatct</Link></div>
                </div>
                <div className="nav-o-c">LOGIN</div>
            </nav>
        </>
    )
}

export default Navbar