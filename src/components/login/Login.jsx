import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./login.css";
import img from "../../assets/images/img1.png";
import LoginRegisterHead from "./LoginRegisterHead";
import { loginRequest } from "../../Redux/local/LoginPage";
import { loadUser } from "../../Redux/global/LoadUser";

const Login = () => {
  const dispatch = useDispatch();
  const { loginDisplay, status } = useSelector((state) => state.Login);
  const [fields, setfields] = useState({ email: "", password: "" });

  useEffect(() => {
    dispatch(loadUser());
    if (status == true) {
      dispatch({ type: "toggleLogin" });
    }
  }, [status]);

  const handleCloseBtn = () => {
    dispatch({
      type: "toggleLogin",
    });
  };

  const onchangeHandler = (e) => {
    setfields({ ...fields, [e.target.name]: e.target.value });
  };

  const submitform = (e) => {
    e.preventDefault();
    dispatch(loginRequest(fields));
  };

  const toggleForgotPasswodDisplay = () => {
    dispatch({
      type: "toggleForgot",
    });
  };

  return (
    <div
      className="Login-wrapper"
      style={
        {
          display: loginDisplay ? "flex" : "none",
        }
      }
    >
      <div className="login-content">
        <LoginRegisterHead />
        <div className="register-form">
          <form className="pure-form" onSubmit={submitform}>
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
            <span className="forget-pass" onClick={toggleForgotPasswodDisplay}>
              Forgot Password
            </span>
            <input className="login-btn" type="submit" value="Login" />
          </form>
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
