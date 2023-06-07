import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as validator from "validator";

import "./login.css";
import img from "../../assets/images/img1.png";
import LoginRegisterHead from "./LoginRegisterHead";
import { toast } from "react-toastify";
import { loginRequest } from "../../Redux/local/LoginPage";

const Login = () => {
    const dispatch = useDispatch();
    const { loginDisplay } = useSelector((state) => state.Login);
    const [fields, setfields] = useState({ email: "", password: "" });

    const handleCloseBtn = () => {
        dispatch({
            type: "toggleLogin",
        });
    };

    const onchangeHandler = (e) => {
        setfields({ ...fields, [e.target.name]: e.target.value });
    };

    const submitform = (e) => {
        if (validator.isEmail(fields.email)) {
            if (fields.password.length > 4) {
                dispatch(loginRequest(fields));
            } else {
                toast.error("Password length atleast 4 required");
            }
        } else {
            toast.error("Not Valid Email");
        }
    };

    return (
        <div
            className="Login-wrapper"
            style={{ display: loginDisplay ? "flex" : "none" }}
        >
            <div className="login-content">
                <LoginRegisterHead />
                <div className="register-form">
                    <input
                        className="inp-fields"
                        placeholder="email"
                        type="email"
                        name="email"
                        id="email"
                        value={fields.email}
                        onChange={onchangeHandler}
                    />
                    <input
                        className="inp-fields"
                        placeholder="password"
                        type="password"
                        name="password"
                        id="password"
                        value={fields.password}
                        onChange={onchangeHandler}
                    />
                    <span className="forget-pass">Forgot Password</span>
                    <button
                        type="submit"
                        className="form-submit-btn"
                        onClick={submitform}
                    >
                        <span>login</span>
                    </button>
                </div>
            </div>
            <div className="login-image">
                <img className="login-image-img" src={img} alt="" />
            </div>
            <div className="close-button" onClick={handleCloseBtn}>
                X
            </div>
        </div>
    );
};

export default Login;
