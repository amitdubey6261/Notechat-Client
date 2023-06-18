import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./login.css";
import img from "../../assets/images/img1.png";
import LoginRegisterHead from "./LoginRegisterHead";
import { forgotPassword } from "../../Redux/local/ForgotPage";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const display = useSelector(state => state.ForgotReducer.display);

    const [fields, setfields] = useState({
        email: ""
    })

    const handleChange = (e) => {
        setfields({ ...fields, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(fields));
    }

    const toggleForgotPasswodDisplay = () => {
        dispatch({
            type: "toggleForgot",
        });
    };

    return (
        <div
            className="Login-wrapper"
            style={{ display: display ? "flex" : "none" }}
        >
            <div className="login-content">
                <LoginRegisterHead />
                <div className="register-form">
                    <form action="/" onSubmit={handleSubmit} className="pure-form" >
                        <input
                            className="inp-fields"
                            placeholder="email"
                            type="email"
                            name="email"
                            id="email"
                            value={fields.email}
                            onChange={handleChange}
                        />
                        <input
                            className="login-btn"
                            type="submit"
                            value="Submit Email"
                        />
                    </form>
                </div>
            </div>
            <div className="login-image">
                <img className="login-image-img" src={img} alt="" />
            </div>
            <div className="close-button" onClick={toggleForgotPasswodDisplay}>
                X
            </div>
        </div>
    );
};

export default ForgotPassword;
