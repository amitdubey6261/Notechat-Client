import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/global/Logout";
import {BsFillCaretRightFill} from 'react-icons/bs';

const LogoutBtn = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    const infoHeaderToggler = () =>{
        dispatch({
            type : "toggleinfoHeader"
        })
    }

    return (
        <>
            <div className="LoginBtn-wrapper">
                <div id="logout-box" onClick={handleLogout}><span>Logout</span></div>
                <span onClick={infoHeaderToggler} className="l-opener"><BsFillCaretRightFill  /></span>
            </div>
        </>
    );
};

export default LogoutBtn;
