import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../../Redux/global/Logout";
import { loadUser } from "../../Redux/global/LoadUser";

const LogoutBtn = ({toggle}) => {
    const dispatch = useDispatch();
    const { status } = useSelector( (state) => state.logoutReducer ) ; 

    const handleLogout = () => {
        dispatch(logout());
        location.reload();
    };

    // useEffect(()=>{
    //     dispatch(loadUser())
    // } , [status])

    return (
        <>
            <div className="nav-o-c " id="login-box">
                <span onClick={handleLogout}>Logout</span>
            </div>
        </>
    );
};

export default LogoutBtn;
