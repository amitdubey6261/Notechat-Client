import React, { useState, useEffect, useRef } from "react";
import "./login.css";

import img from "../../assets/images/New folder/il.jpeg"

import LoginRegisterHead from "./LoginRegisterHead";
import { useDispatch, useSelector } from "react-redux";
import { registrationRequest } from "../../Redux/local/RegistrationPage";
import { loadUser } from "../../Redux/global/LoadUser";
import Loader from "../loader/Loader";

const Register = () => {
    const dispatch = useDispatch();
    const form = useRef();

    const { registerDisplay, res, status , loading } = useSelector(
        (state) => state.Register
    );

    const [fields, setfields] = useState({
        name: "",
        email: "",
        password: "",
        collage: "",
        contact: "",
        year: "",
        gender: "",
        city: "",
        course: "",
        upiid: "",
        avatar: ""
    });

    const validateAndSubmit = (e) => {
        e.preventDefault();
        dispatch(registrationRequest(fields));
    };

    const onchangeHandler = (e) => {
        setfields({ ...fields, [e.target.name]: e.target.value });
    };

    const setFileToBase = (file, e) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setfields({ ...fields, [e.target.name]: reader.result });
        }
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file, e);
    }

    useEffect(() => {
        dispatch(loadUser());
        if (status == true) {
            dispatch({ type: "toggleRegister" });
        }
    }, [status]);


    const handleCloseBtn = () => {
        dispatch({
            type: "toggleRegister",
        });
    };

    return (
        <>
            { loading && <Loader text={"signing in..."}/>}
            <div
                className="Login-wrapper"
                style={{ display: registerDisplay ? "flex" : "none" }}
            >
                <div className="close-button" onClick={handleCloseBtn}>
                    X
                </div>
                <div className="login-content">
                    <LoginRegisterHead />
                    <div className="registration-form">
                        <form
                            ref={form}
                            className="pure-form"
                            encType="multipart/form-data"
                            onSubmit={validateAndSubmit}
                        >
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={handleImage}
                                className="inp-fields"
                            />
                            <input
                                onChange={onchangeHandler}
                                type="text"
                                name="name"
                                value={fields.name}
                                className="inp-fields"
                                placeholder="name"
                            />
                            <input
                                onChange={onchangeHandler}
                                name="email"
                                value={fields.email}
                                className="inp-fields"
                                type="email"
                                placeholder="email"
                            />
                            <input
                                onChange={onchangeHandler}
                                name="password"
                                value={fields.password}
                                className="inp-fields"
                                type="password"
                                placeholder="password"
                            />
                            <input
                                onChange={onchangeHandler}
                                name="collage"
                                value={fields.collage}
                                className="inp-fields"
                                type="text"
                                placeholder="collage"
                            />
                            <input
                                onChange={onchangeHandler}
                                name="contact"
                                value={fields.contact}
                                className="inp-fields"
                                type="number"
                                placeholder="contact"
                            />
                            <input
                                onChange={onchangeHandler}
                                name="year"
                                value={fields.year}
                                className="inp-fields"
                                type="number"
                                placeholder="year"
                            />
                            <input
                                onChange={onchangeHandler}
                                name="gender"
                                value={fields.gender}
                                className="inp-fields"
                                type="text"
                                placeholder="gender"
                            />
                            <input
                                onChange={onchangeHandler}
                                name="city"
                                value={fields.city}
                                className="inp-fields"
                                type="text"
                                placeholder="city"
                            />
                            <input
                                onChange={onchangeHandler}
                                name="course"
                                value={fields.course}
                                className="inp-fields"
                                type="text"
                                placeholder="course"
                            />
                            <input
                                onChange={onchangeHandler}
                                name="upiid"
                                value={fields.upiid}
                                className="inp-fields"
                                type="text"
                                placeholder="UPI ID"
                            />
                            <input className="login-btn" type="submit" value="Register" />
                        </form>
                    </div>
                </div>
                <div className="login-image">
                    <img className="login-image-img" src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default Register;
