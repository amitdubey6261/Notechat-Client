import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../../Redux/global/Logout";

const LogoutBtn = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <div className="nav-o-c " id="login-box">
                <span onClick={handleLogout}>Logout</span>
            </div>
        </>
    );
};

export default LogoutBtn;
