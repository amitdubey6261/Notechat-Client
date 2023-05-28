import React from 'react'

import { Link } from 'react-router-dom'

import './navbar.css'
import { useDispatch, useSelector } from 'react-redux'
const Navbar = () => {
    const dispatch = useDispatch();
    const { loginDisplay } = useSelector((state) => state.authPageDisplay);

    const handleLogin = () => {

        dispatch({
            type: "toggleLogin"
        })

        console.log(loginDisplay)
    }

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
                <div className="nav-o-c " id='login-box'><span onClick={handleLogin}>LOGIN</span></div>
            </nav>
        </>
    )
}

export default Navbar